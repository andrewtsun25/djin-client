import { Card, CardContent, CardMedia, Chip, Grid, Grow, Typography } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import { useOrganization } from 'api/shared';
import { BulletPoints, IconLink } from 'components/shared';
import { DurationWithOrganizationCardHeader, SkillChips } from 'components/shared/card';
import { RulesLogic } from 'json-logic-js';
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
        organizationName,
    },
}: EmploymentCardProps) => {
    const classes = employmentCardStyles();
    const organization = useOrganization(organizationRef);
    const projectQueryJsonLogic: RulesLogic = {
        and: [{ '==': [{ var: 'organizationName' }, organizationName] }],
    };
    const projectQueryJsonLogicString = encodeURIComponent(JSON.stringify(projectQueryJsonLogic));
    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Grow in>
                <Card variant="outlined" className={classes.root}>
                    <DurationWithOrganizationCardHeader
                        title={organization.name}
                        subtitle={role}
                        startDate={startDate}
                        endDate={endDate}
                        logoUrl={organization.logoUrl}
                    />
                    <CardMedia image={mediaUrl} className={classes.media} />
                    <CardContent>
                        <Chip label={jobType} size="small" className={classes.jobChip} />
                        <IconLink
                            icon={<AppsIcon />}
                            text="Projects"
                            href={`/coding/projects?filter=${projectQueryJsonLogicString}`}
                            target="_self"
                            internal
                        />
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
