import { Avatar, Card, CardContent, CardHeader, CardMedia, Chip, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Experience } from 'types/experience';

import experienceCardStyles from './ExperienceCard.styles';

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    experience: {
        endDate,
        startDate: { monthShort: startDateMonth, year: startDateYear },
        role,
        company,
        avatarUrl,
        mediaUrl,
        description,
        responsibilities,
        skills,
        jobType,
    },
}: ExperienceCardProps) => {
    const classes = experienceCardStyles();
    const subheader = endDate
        ? `${startDateMonth} ${startDateYear} - ${endDate.month} ${endDate.year}, ${role}`
        : `${startDateMonth} ${startDateYear} - Present, ${role}`;
    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Card variant="outlined" className={classes.root}>
                <CardHeader
                    title={company}
                    subheader={subheader}
                    avatar={<Avatar alt={`${company}_avatar`} src={avatarUrl} />}
                />
                <CardMedia image={mediaUrl} className={classes.media} />
                <CardContent>
                    <Chip label={jobType} size="small" className={classes.jobChip} />
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

export default ExperienceCard;
