import { Avatar, CardHeader } from '@material-ui/core';
import { DateTime } from 'luxon';
import React from 'react';

import StyledBadge from './StyledBadge';

interface TimeIntervalCardHeaderProps {
    title: string;
    subtitle: string;
    startDate: DateTime;
    endDate?: DateTime;
    logoUrl: string;
}

const TimeIntervalCardHeader: React.FC<TimeIntervalCardHeaderProps> = ({
    title,
    subtitle,
    startDate: { monthShort: startDateMonth, year: startDateYear },
    endDate,
    logoUrl,
}: TimeIntervalCardHeaderProps) => {
    const subheader = endDate
        ? `${startDateMonth} ${startDateYear} - ${endDate.monthShort} ${endDate.year}, ${subtitle}`
        : `${startDateMonth} ${startDateYear} - Present, ${subtitle}`;
    const baseAvatar: React.ReactNode = <Avatar alt={title} src={logoUrl} />;
    const avatar: React.ReactNode = endDate ? (
        baseAvatar
    ) : (
        <StyledBadge
            overlap="circle"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            variant="dot"
        >
            {baseAvatar}
        </StyledBadge>
    );
    return <CardHeader title={title} subheader={subheader} avatar={avatar} />;
};

export default TimeIntervalCardHeader;
