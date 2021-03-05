import { Card, CardContent, CardMedia, Grid, Grow, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import { useOrganization } from 'api/shared';
import BulletPoints from 'components/shared/BulletPoints';
import { SkillChips, TimeIntervalCardHeader } from 'components/shared/card';
import IconLink from 'components/shared/IconLink';
import { map } from 'lodash';
import { DateTime } from 'luxon';
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
        organization: organizationRef,
        mediaUrl,
        description,
        responsibilities,
        skills,
        projectUrls,
        disclaimer,
    },
}: ProjectCardProps) => {
    const classes = projectCardStyles();
    const organization = useOrganization(organizationRef);
    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Grow in>
                <Card variant="outlined" className={classes.root}>
                    <TimeIntervalCardHeader
                        title={name}
                        subtitle={organization.name}
                        startDate={DateTime.fromJSDate(startDate)}
                        endDate={endDate ? DateTime.fromJSDate(endDate) : null}
                        logoUrl={organization.logoUrl}
                    />
                    <CardMedia image={mediaUrl} className={classes.media} />
                    <CardContent>
                        {projectUrls &&
                            map(projectUrls, (url: string, urlName: string) => {
                                const icon = urlName === 'Source Code' ? <GitHubIcon /> : <LinkIcon />;
                                return <IconLink key={urlName} href={url} text={urlName} icon={icon} />;
                            })}
                        {disclaimer && (
                            <Typography paragraph className={classes.disclaimer}>
                                Disclaimer: {disclaimer}
                            </Typography>
                        )}
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
