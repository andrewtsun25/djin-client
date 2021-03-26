import { Grid } from '@material-ui/core';
import { useProjects } from 'api/projects';
import { LoadingView } from 'components/shared';
import ErrorView from 'components/shared/ErrorView';
import { isNil } from 'lodash';
import React from 'react';
import { isNotNil } from 'utils/general';

import ProjectCard from './ProjectCard';

const ProjectsCardGrid: React.FC = () => {
    const { projects, error } = useProjects();

    // Error state
    if (isNotNil(error)) {
        return <ErrorView error={error} message="Information on projects unavailable." />;
    }

    // Loading state
    if (isNil(projects)) {
        return <LoadingView message="Loading projects information..." />;
    }

    // Success state
    return (
        <Grid container direction="row">
            {projects.map((project, index) => (
                <ProjectCard project={project} key={index} />
            ))}
        </Grid>
    );
};

export default ProjectsCardGrid;
