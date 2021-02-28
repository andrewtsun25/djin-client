import { Card, CardContent, CardMedia, Grid, Grow, Typography } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import BulletPoints from 'components/shared/BulletPoints';
import { SkillChips, TimeIntervalCardHeader } from 'components/shared/card';
import IconLink from 'components/shared/IconLink';
import React from 'react';
import { Project } from 'types/project';

import projectCardStyles from './ProjectCard.styles';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    project: {
        name,
        startDate,
        endDate,
        organization,
        logoUrl,
        mediaUrl,
        description,
        responsibilities,
        skills,
        projectLink,
    },
}: ProjectCardProps) => {
    const classes = projectCardStyles();
    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Grow in>
                <Card variant="outlined" className={classes.root}>
                    <TimeIntervalCardHeader
                        title={name}
                        subtitle={organization}
                        startDate={startDate}
                        endDate={endDate}
                        logoUrl={logoUrl}
                    />
                    <CardMedia image={mediaUrl} className={classes.media} />
                    <CardContent>
                        {projectLink && <IconLink href={projectLink} text="Project Link" icon={<LinkIcon />} />}
                        <Typography paragraph>{description}</Typography>
                        <BulletPoints points={responsibilities} />
                        <SkillChips skills={skills} />
                    </CardContent>
                </Card>
            </Grow>
        </Grid>
    );
};

export default ProjectCard;
