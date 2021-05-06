import { Card, CardContent, CardMedia, Grid, Grow, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import { useOrganization } from 'api/shared';
import { StorybookIcon } from 'components/icons';
import { IconLink } from 'components/shared';
import { BulletPoints } from 'components/shared/BulletPoints';
import { DurationWithOrganizationCardHeader, SkillChips } from 'components/shared/card';
import { map } from 'lodash';
import React from 'react';
import { ProjectResponse } from 'types/project';

import projectCardStyles from './ProjectCard.styles';

interface ProjectCardProps {
    project: ProjectResponse;
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
                    <DurationWithOrganizationCardHeader
                        title={name}
                        subtitle={organization.name}
                        startDate={startDate}
                        endDate={endDate}
                        logoUrl={organization.logoUrl}
                    />
                    <CardMedia image={mediaUrl} className={classes.media} />
                    <CardContent>
                        {projectUrls &&
                            map(projectUrls, (url: string, urlName: string) => {
                                let icon: JSX.Element;
                                switch (urlName) {
                                    case 'Source Code':
                                        icon = <GitHubIcon />;
                                        break;
                                    case 'Storybook':
                                        icon = <StorybookIcon />;
                                        break;
                                    default:
                                        icon = <LinkIcon />;
                                }
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
