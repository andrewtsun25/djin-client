import { Avatar, Card, CardContent, CardHeader, Chip, Typography } from '@material-ui/core';
import DocumentLink from 'components/shared/DocumentLink';
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
                <DocumentLink href={paperLink} text="Research Paper" />
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
