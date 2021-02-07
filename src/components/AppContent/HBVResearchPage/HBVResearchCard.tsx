import { Avatar, Card, CardContent, CardHeader } from '@material-ui/core';
import React from 'react';
import { Research } from 'types/research';

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
    },
}: HBVResearchCardProps) => {
    const subheader = `${organization}, ${startDateMonth} ${startDateYear} - ${endDateMonth} ${endDateYear}`;
    return (
        <Card>
            <CardHeader
                title={name}
                subheader={subheader}
                avatar={<Avatar alt={`${organization}_avatar`} src={avatarUrl} />}
            />
            <CardContent>Lorem Ipsum</CardContent>
        </Card>
    );
};

export default HBVResearchCard;
