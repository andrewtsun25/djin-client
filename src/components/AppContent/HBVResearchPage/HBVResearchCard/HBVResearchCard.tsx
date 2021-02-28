import { Card, CardContent, Slide, Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import BulletPoints from 'components/shared/BulletPoints';
import { SkillChips, TimeIntervalCardHeader } from 'components/shared/card';
import IconLink from 'components/shared/IconLink';
import React from 'react';
import { Research } from 'types/research';

import hbvResearchCardStyles from './HBVResearchCard.styles';

interface HBVResearchCardProps {
    research: Research;
}

const HBVResearchCard: React.FC<HBVResearchCardProps> = ({
    research: { logoUrl, organization, name, startDate, endDate, description, responsibilities, skills, paperLink },
}: HBVResearchCardProps) => {
    const classes = hbvResearchCardStyles();
    return (
        <Slide direction="up" in mountOnEnter unmountOnExit>
            <Card className={classes.root}>
                <TimeIntervalCardHeader
                    title={name}
                    subtitle={organization}
                    startDate={startDate}
                    endDate={endDate}
                    logoUrl={logoUrl}
                />
                <CardContent>
                    <IconLink
                        href={paperLink}
                        text="Research Paper"
                        icon={<DescriptionIcon />}
                        className={classes.link}
                    />
                    <Typography paragraph>{description}</Typography>
                    <BulletPoints points={responsibilities} />
                    <SkillChips skills={skills} />
                </CardContent>
            </Card>
        </Slide>
    );
};

export default HBVResearchCard;
