import { Card, CardContent, Slide, Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import { useOrganization } from 'api/shared';
import { BulletPoints } from 'components/shared';
import { DurationWithOrganizationCardHeader, SkillChips } from 'components/shared/card';
import IconLink from 'components/shared/IconLink';
import React from 'react';
import { HBVResearchPaper } from 'types/hbvResearch';

import hbvResearchCardStyles from './HBVResearchCard.styles';

interface HBVResearchCardProps {
    research: HBVResearchPaper;
}

const HBVResearchCard: React.FC<HBVResearchCardProps> = ({
    research: {
        organization: organizationRef,
        name,
        startDate,
        endDate,
        description,
        responsibilities,
        skills,
        paperLink,
    },
}: HBVResearchCardProps) => {
    const classes = hbvResearchCardStyles();
    const { name: organizationName, logoUrl } = useOrganization(organizationRef);

    return (
        <Slide direction="up" in mountOnEnter unmountOnExit>
            <Card className={classes.root}>
                <DurationWithOrganizationCardHeader
                    title={name}
                    subtitle={organizationName}
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
