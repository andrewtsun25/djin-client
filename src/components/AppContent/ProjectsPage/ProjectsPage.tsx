import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import sharedStyles from 'components/shared/shared.styles';
import useProjects from 'hooks/useProjects';
import React from 'react';

import ProjectCard from './ProjectCard';
import projectPageStyles from './ProjectsPage.styles';

const ProjectsPage: React.FC = () => {
    const projects = useProjects();
    const classes = projectPageStyles();
    const shared = sharedStyles();
    return (
        <div className={clsx(shared.bg, classes.bg)}>
            <div className={classes.colorBg}>
                <Typography variant="h2" align="center" className={classes.pageTitle}>
                    Coding Projects
                </Typography>
                <Grid container direction="row">
                    {projects.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default ProjectsPage;
