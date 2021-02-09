import { Avatar, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import React from 'react';
import { Education } from 'types/education';

import IconLink from '../../shared/IconLink';
import educationCardStyles from './EducationCard.styles';

interface EducationCardProps {
    education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({
    education: {
        endDate: { monthShort: endDateMonth, year: endDateYear },
        startDate: { monthShort: startDateMonth, year: startDateYear },
        major,
        name,
        avatarUrl,
        syllabusLink,
        residentialCollegeSyllabusLink,
        department,
        residentialCollege,
        gpa,
        description,
    },
}: EducationCardProps) => {
    const classes = educationCardStyles();
    const subheader = `${startDateMonth} ${startDateYear} - ${endDateMonth} ${endDateYear}, ${major}`;
    return (
        <Card variant="outlined" className={classes.root}>
            <CardHeader title={name} subheader={subheader} avatar={<Avatar alt={name} src={avatarUrl} />} />
            <CardContent>
                <IconLink icon={<SchoolIcon />} href={syllabusLink} text="Degree Requirements" />
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
    );
};

export default EducationCard;
