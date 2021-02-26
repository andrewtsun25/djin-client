import { Card, CardContent, CardMedia, Chip, Grid, Grow, Typography } from '@material-ui/core';
import { TimeIntervalCardHeader } from 'components/shared/card';
import React from 'react';
import { Employment } from 'types/employment';

import employmentCardStyles from './EmploymentCard.styles';

interface EmploymentCardProps {
    experience: Employment;
}

const EmploymentCard: React.FC<EmploymentCardProps> = ({
    experience: {
        endDate,
        startDate,
        role,
        company,
        logoUrl,
        mediaUrl,
        description,
        responsibilities,
        skills,
        jobType,
    },
}: EmploymentCardProps) => {
    const classes = employmentCardStyles();
    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Grow in>
                <Card variant="outlined" className={classes.root}>
                    <TimeIntervalCardHeader
                        title={company}
                        subtitle={role}
                        startDate={startDate}
                        endDate={endDate}
                        logoUrl={logoUrl}
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
            </Grow>
        </Grid>
    );
};

export default EmploymentCard;
