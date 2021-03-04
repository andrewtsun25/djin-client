import { Card, CardContent, CardMedia, Chip, Grid, Grow, Typography } from '@material-ui/core';
import { useOrganization } from 'api/shared';
import BulletPoints from 'components/shared/BulletPoints';
import { SkillChips, TimeIntervalCardHeader } from 'components/shared/card';
import { DateTime } from 'luxon';
import React from 'react';
import { Employment } from 'types/employment';

import employmentCardStyles from './EmploymentCard.styles';

interface EmploymentCardProps {
    employment: Employment;
}

const EmploymentCard: React.FC<EmploymentCardProps> = ({
    employment: {
        endDate,
        startDate,
        role,
        organization: organizationRef,
        mediaUrl,
        description,
        responsibilities,
        skills,
        jobType,
    },
}: EmploymentCardProps) => {
    const classes = employmentCardStyles();
    const organization = useOrganization(organizationRef);
    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Grow in>
                <Card variant="outlined" className={classes.root}>
                    <TimeIntervalCardHeader
                        title={organization.name}
                        subtitle={role}
                        startDate={DateTime.fromJSDate(startDate)}
                        endDate={endDate ? DateTime.fromJSDate(endDate) : null}
                        logoUrl={organization.logoUrl}
                    />
                    <CardMedia image={mediaUrl} className={classes.media} />
                    <CardContent>
                        <Chip label={jobType} size="small" className={classes.jobChip} />
                        <Typography paragraph>{description}</Typography>
                        <BulletPoints points={responsibilities} />
                        <SkillChips skills={skills} />
                    </CardContent>
                </Card>
            </Grow>
        </Grid>
    );
};

export default EmploymentCard;
