import { Avatar, Card, CardContent, CardHeader, Chip, Grow, Slide, Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import IconLink from 'components/shared/IconLink';
import React from 'react';
import { Research } from 'types/research';

import hbvResearchCardStyles from './HBVResearchCard.styles';

interface HBVResearchCardProps {
    research: Research;
}

const HBVResearchCard: React.FC<HBVResearchCardProps> = ({
    research: {
        avatarUrl,
        organization,
        name,
        startDate: { monthShort: startDateMonth, year: startDateYear },
        endDate: { monthShort: endDateMonth, year: endDateYear },
        description,
        responsibilities,
        skills,
        paperLink,
    },
}: HBVResearchCardProps) => {
    const classes = hbvResearchCardStyles();
    const subheader = `${organization}, ${startDateMonth} ${startDateYear} - ${endDateMonth} ${endDateYear}`;
    return (
        <Slide direction="up" in mountOnEnter unmountOnExit>
            <Card className={classes.root}>
                <CardHeader
                    title={name}
                    subheader={subheader}
                    avatar={<Avatar alt={`${organization}_avatar`} src={avatarUrl} />}
                />
                <CardContent>
                    <IconLink
                        href={paperLink}
                        text="Research Paper"
                        icon={<DescriptionIcon />}
                        className={classes.link}
                    />
                    <Typography paragraph>{description}</Typography>
                    {responsibilities.length > 0 && (
                        <ul>
                            {responsibilities.map((responsibility, index) => (
                                <li key={index}>
                                    <Typography>{responsibility}</Typography>
                                </li>
                            ))}
                        </ul>
                    )}
                    {skills.length > 0 && (
                        <div className={classes.skillChipContainer}>
                            {skills.map((skill) => (
                                <Chip label={skill} size="small" className={classes.skillChip} key={skill} />
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </Slide>
    );
};

export default HBVResearchCard;
