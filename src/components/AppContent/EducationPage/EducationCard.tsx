import React from "react";
import {Education} from "types/education";
import {Avatar, Card, CardContent, CardHeader, Link, Typography} from "@material-ui/core";
import educationCardStyles from "./EducationCard.styles";

interface EducationCardProps {
    education: Education
}

const EducationCard: React.FC<EducationCardProps> = ({ education }: EducationCardProps) => {
    const classes = educationCardStyles();
    const subheader = education.endDate
        ? `${education.startDate.monthShort} ${education.startDate.year} - ${education.endDate.monthShort} ${education.endDate.year}, ${education.major}`
        : `${education.startDate.monthShort} ${education.startDate.year} - Present, ${education.major}`;
    return (
        <Card variant="outlined" className={classes.root}>
            <CardHeader
                title={education.name}
                subheader={subheader}
                avatar={<Avatar alt={education.name} src={education.avatarUrl} />}
            />
            <CardContent>
                <Typography paragraph>
                    <Link href={education.syllabusLink} target="_blank" rel="noopener noreferrer">Degree Requirements</Link>
                </Typography>
                {education.department && <Typography paragraph>
                    <b>Department:</b> {education.department}
                </Typography>}
                {education.residentialCollege && <Typography paragraph>
                    <b>Residential College:</b> {education.residentialCollege}
                </Typography>}
                <Typography paragraph>
                    <b>GPA:</b> {education.gpa.toFixed(3)}
                </Typography>
                <Typography paragraph>
                    {education.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default EducationCard;
