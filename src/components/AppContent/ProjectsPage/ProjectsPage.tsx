import { Grid, Typography } from '@material-ui/core';
import Background from 'components/shared/Background';
import useProjects from 'hooks/useProjects';
import React from 'react';

import ProjectCard from './ProjectCard';
import projectPageStyles from './ProjectsPage.styles';

const projectsBg = 'https://storage.googleapis.com/storage.djin.dev/projects/bg/matrix_bg.png';

const ProjectsPage: React.FC = () => {
    const projects = useProjects();
    const classes = projectPageStyles();
    return (
        <Background imageUrl={projectsBg} tint>
            <Typography variant="h2" align="center" className={classes.pageTitle}>
                Coding Projects
            </Typography>
            <Grid container direction="row">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </Grid>
        </Background>
    );
};

export default ProjectsPage;
