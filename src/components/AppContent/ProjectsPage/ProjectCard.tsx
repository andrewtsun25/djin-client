import { Avatar, Card, CardContent, CardHeader, CardMedia, Chip, Grid, Typography } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
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
        endDate,
        startDate: { monthShort: startDateMonth, year: startDateYear },
        organization,
        avatarUrl,
        mediaUrl,
        description,
        responsibilities,
        skills,
        projectLink,
    },
}: ProjectCardProps) => {
    const classes = projectCardStyles();
    const subheader = endDate
        ? `${organization}, ${startDateMonth} ${startDateYear} - ${endDate.monthShort} ${endDate.year}`
        : `${organization}, ${startDateMonth} ${startDateYear} - Present`;
    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Card variant="outlined" className={classes.root}>
                <CardHeader
                    title={name}
                    subheader={subheader}
                    avatar={<Avatar alt={`${organization}_avatar`} src={avatarUrl} />}
                />
                <CardMedia image={mediaUrl} className={classes.media} />
                <CardContent>
                    {projectLink && <IconLink href={projectLink} text="Project Link" icon={<LinkIcon />} />}
                    <Typography paragraph>{description}</Typography>
                    {responsibilities.length > 0 && (
                        <ul>
                            {responsibilities.map((responsibility, index) => (
                                <li key={index}>
                                    <Typography>{responsibility}</Typography>
                                </li>
                            ))}
                        </ul>
                    )}
                    {skills.length > 0 && (
                        <div className={classes.skillChipContainer}>
                            {skills.map((skill) => (
                                <Chip label={skill} size="small" className={classes.skillChip} key={skill} />
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProjectCard;
