import { Card, CardContent, Slide, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import { TimeIntervalCardHeader } from 'components/shared/card';
import IconLink from 'components/shared/IconLink';
import React from 'react';
import { Education } from 'types/education';

import educationCardStyles from './EducationCard.styles';

interface EducationCardProps {
    education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({
    education: {
        endDate,
        startDate,
        major,
        name,
        logoUrl,
        syllabusUrl,
        residentialCollegeSyllabusLink,
        department,
        residentialCollege,
        gpa,
        description,
    },
}: EducationCardProps) => {
    const classes = educationCardStyles();
    return (
        <Slide direction="up" in mountOnEnter unmountOnExit>
            <Card variant="outlined" className={classes.root}>
                <TimeIntervalCardHeader
                    title={name}
                    subtitle={major}
                    startDate={startDate}
                    endDate={endDate}
                    logoUrl={logoUrl}
                />
                <CardContent>
                    <IconLink icon={<SchoolIcon />} href={syllabusUrl} text="Degree Requirements" />
                    {residentialCollegeSyllabusLink && (
                        <IconLink
                            icon={<SchoolIcon />}
                            href={residentialCollegeSyllabusLink}
                            text="Residential College GE Requirements"
                        />
                    )}
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
