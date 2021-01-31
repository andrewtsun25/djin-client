import React from "react";
import {Education} from "types/education";
import {Avatar, Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import educationCardStyles from "./EducationCard.styles";

interface EducationCardProps {
    education: Education
}

const EducationCard: React.FC<EducationCardProps> = ({ education }: EducationCardProps) => {
    const classes = educationCardStyles();
    return (
        <Card variant="outlined" className={classes.root}>
            <CardHeader
                title={education.name}
                subheader={`${education.startDate.year} - ${education.endDate.year}, ${education.major}`}
                avatar={<Avatar alt={education.name} src={education.avatarUrl} />}
            />
            <CardContent>
                <Typography paragraph>
                    <a href={education.syllabusLink} target="_blank" rel="noopener noreferrer">Degree Requirements</a>
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
