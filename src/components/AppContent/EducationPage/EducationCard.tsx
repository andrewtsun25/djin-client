import { Avatar, Card, CardContent, CardHeader, Link, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import React from 'react';
import { Education } from 'types/education';

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
                <Typography paragraph>
                    <Link href={syllabusLink} className={classes.reqLink} target="_blank" rel="noopener noreferrer">
                        <SchoolIcon className={classes.reqLinkIcon} />
                        Degree Requirements
                    </Link>
                </Typography>
                {residentialCollegeSyllabusLink && (
                    <Typography paragraph>
                        <Link
                            href={residentialCollegeSyllabusLink}
                            className={classes.reqLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SchoolIcon className={classes.reqLinkIcon} />
                            Residential College GE Requirements
                        </Link>
                    </Typography>
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
