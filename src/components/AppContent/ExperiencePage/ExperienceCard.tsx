import React from "react";
import {Experience} from "types/experience";
import experienceCardStyles from "./ExperienceCard.styles";
import {Avatar, Card, CardContent, CardHeader, CardMedia, Grid, Typography} from "@material-ui/core";

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }: ExperienceCardProps) => {
    const classes = experienceCardStyles();
    const subHeader = experience.endDate
        ? `${experience.startDate.monthShort} ${experience.startDate.year} - ${experience.endDate.monthShort} ${experience.endDate.year}, ${experience.role}`
        : `${experience.startDate.monthShort} ${experience.startDate.year} - Present, ${experience.role}`;
    return (
        <Grid item xs={12} md={6} lg={4} xl={3}>
            <Card className={classes.root}>
                <CardHeader
                    title={experience.company}
                    subheader={subHeader}
                    avatar={<Avatar alt={`${experience.company}_avatar`} src={experience.avatarUrl} />}
                />
                <CardMedia image={experience.mediaUrl} className={classes.media}/>
                <CardContent>
                    <Typography paragraph>{experience.description}</Typography>
                    {experience.responsibilities.length > 0 &&
                        <ul>
                            {experience.responsibilities.map(responsibility => <li>
                                <Typography>{responsibility}</Typography>
                            </li>)}
                        </ul>
                    }
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ExperienceCard;
