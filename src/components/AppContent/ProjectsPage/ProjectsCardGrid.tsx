import { Grid } from '@material-ui/core';
import { Document } from '@nandorojo/swr-firestore';
import { useProjects } from 'api/projects';
import { ErrorView, LoadingView } from 'components/shared';
import { QueryFilter } from 'components/shared/QueryFilter';
import { isNil } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Project } from 'types/project';
import { isNotNil } from 'utils/general';

import ProjectCard from './ProjectCard';
import config from './ProjectsPage.qbconfig';

const ProjectsCardGrid: React.FC = () => {
    const { projects, error } = useProjects();

    const [filteredProjects, setFilteredProjects] = useState<Document<Project>[]>([]);
    const [initialized, setInitialized] = useState(false);

    // Initialize filtered employments to true once loaded
    useEffect(() => {
        if (isNotNil(projects) && !initialized) {
            setFilteredProjects(projects);
            setInitialized(true);
        }
    }, [initialized, projects]);

    // Error state
    if (isNotNil(error)) {
        return <ErrorView error={error} message="Information on projects unavailable." />;
    }

    // Loading state
    if (isNil(projects)) {
        return <LoadingView message="Loading projects information..." />;
    }

    // Success state
    const handleApplyFilter = (newFilteredProjects: Document<Project>[]): void => {
        setFilteredProjects(newFilteredProjects);
    };

    const handleClearFilter = (): void => {
        setFilteredProjects(projects);
    };

    return (
        <>
            <QueryFilter
                config={config}
                collection={projects}
                onApplyFilter={handleApplyFilter}
                onClearFilter={handleClearFilter}
            />
            <Grid container direction="row">
                {filteredProjects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </Grid>
        </>
    );
};

export default ProjectsCardGrid;
