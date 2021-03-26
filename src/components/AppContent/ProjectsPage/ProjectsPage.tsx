import { Typography } from '@material-ui/core';
import { Background } from 'components/shared';
import { Urls } from 'const/urls';
import React from 'react';

import ProjectsCardGrid from './ProjectsCardGrid';
import projectPageStyles from './ProjectsPage.styles';

const projectsBg = `${Urls.AssetRoot}/projects/bg/matrix_bg.png`;

const ProjectsPage: React.FC = () => {
    const classes = projectPageStyles();
    return (
        <Background imageUrl={projectsBg} tint>
            <Typography variant="h2" align="center" className={classes.pageTitle}>
                Coding Projects
            </Typography>
            <ProjectsCardGrid />
        </Background>
    );
};

export default ProjectsPage;
