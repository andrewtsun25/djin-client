import { Avatar, Card, CardContent, CardHeader, Chip, Link, Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
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
        <Card className={classes.root}>
            <CardHeader
                title={name}
                subheader={subheader}
                avatar={<Avatar alt={`${organization}_avatar`} src={avatarUrl} />}
            />
            <CardContent>
                <Typography paragraph>
                    <Link href={paperLink} className={classes.paperLink} target="_blank" rel="noopener noreferrer">
                        <DescriptionIcon className={classes.paperLinkIcon} />
                        Research Paper
                    </Link>
                </Typography>
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
    );
};

export default HBVResearchCard;
