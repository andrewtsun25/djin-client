import { Card, CardContent, Slide, Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import { useDocument } from '@nandorojo/swr-firestore';
import BulletPoints from 'components/shared/BulletPoints';
import { SkillChips, TimeIntervalCardHeader } from 'components/shared/card';
import IconLink from 'components/shared/IconLink';
import { isNil } from 'lodash';
import { DateTime } from 'luxon';
import React from 'react';
import { HBVResearchPaper } from 'types/hbvResearch';
import { Organization } from 'types/shared';
import { isNotNil } from 'utils/general';

import { useOrganization } from '../../../../api/shared';
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
                <TimeIntervalCardHeader
                    title={name}
                    subtitle={organizationName}
                    startDate={DateTime.fromJSDate(startDate)}
                    endDate={DateTime.fromJSDate(endDate)}
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
