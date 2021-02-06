import { Grid, Typography } from '@material-ui/core';
import useProjects from 'hooks/useProjects';
import React from 'react';

import ProjectCard from './ProjectCard';
import projectPageStyles from './ProjectsPage.styles';

const ProjectsPage: React.FC = () => {
    const projects = useProjects();
    const classes = projectPageStyles();
    return (
        <>
            <Typography variant="h2" align="center" className={classes.pageTitle}>
                Coding Projects
            </Typography>
            <Grid container direction="row">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </Grid>
        </>
    );
};

export default ProjectsPage;
