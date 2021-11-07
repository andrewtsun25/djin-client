import { Card, CardContent, Slide, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import { useOrganization } from 'api/shared';
import { IconLink } from 'components/shared';
import { DurationWithOrganizationCardHeader } from 'components/shared/card';
import { map } from 'lodash';
import React from 'react';
import { FirestoreDocument } from 'types/api';
import { Education } from 'types/education';

import educationCardStyles from './EducationCard.styles';
import StudentOrganizationBullets from './StudentOrganizationBullets';

interface EducationCardProps {
    education: FirestoreDocument<Education>;
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
    return (
        <Slide direction="up" in mountOnEnter unmountOnExit>
            <Card variant="outlined" className={classes.root}>
                <DurationWithOrganizationCardHeader
                    title={name}
                    subtitle={major}
                    startDate={startDate}
                    endDate={endDate}
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
                        <b>GPA:</b> {gpa.toFixed(3)} <i>(Transcript is available upon request.)</i>
                    </Typography>
                    <Typography paragraph>{description}</Typography>
                    <StudentOrganizationBullets educationId={id} educationName={name} />
                </CardContent>
            </Card>
        </Slide>
    );
};

export default EducationCard;
