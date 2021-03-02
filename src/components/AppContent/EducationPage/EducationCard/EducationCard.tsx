import { Card, CardContent, Slide, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import { Document } from '@nandorojo/swr-firestore';
import { useOrganization } from 'api/shared';
import { TimeIntervalCardHeader } from 'components/shared/card';
import IconLink from 'components/shared/IconLink';
import { map } from 'lodash';
import { DateTime } from 'luxon';
import React from 'react';
import { Education } from 'types/education';

import educationCardStyles from './EducationCard.styles';

interface EducationCardProps {
    education: Document<Education>;
}

const EducationCard: React.FC<EducationCardProps> = ({
    education: {
        id,
        endDate,
        startDate,
        major,
        organization: organizationRef,
        syllabusUrls,
        department,
        residentialCollege,
        gpa,
        description,
    },
}: EducationCardProps) => {
    const classes = educationCardStyles();
    const { name, logoUrl } = useOrganization(organizationRef);
    console.log('ID: ', id);
    return (
        <Slide direction="up" in mountOnEnter unmountOnExit>
            <Card variant="outlined" className={classes.root}>
                <TimeIntervalCardHeader
                    title={name}
                    subtitle={major}
                    startDate={DateTime.fromJSDate(startDate)}
                    endDate={endDate ? DateTime.fromJSDate(endDate) : null}
                    logoUrl={logoUrl}
                />
                <CardContent>
                    {map(syllabusUrls, (syllabusUrl, urlName) => (
                        <IconLink key={urlName} icon={<SchoolIcon />} href={syllabusUrl} text={urlName} />
                    ))}
                    {department && (
                        <Typography paragraph>
                            <b>Department:</b> {department}
                        </Typography>
                    )}
                    {residentialCollege && (
                        <Typography paragraph>
                            <b>Residential College:</b> {residentialCollege}
                        </Typography>
                    )}
                    <Typography paragraph>
                        <b>GPA:</b> {gpa.toFixed(3)}
                    </Typography>
                    <Typography paragraph>{description}</Typography>
                </CardContent>
            </Card>
        </Slide>
    );
};

export default EducationCard;
