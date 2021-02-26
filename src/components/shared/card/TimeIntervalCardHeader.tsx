import { Avatar, CardHeader } from '@material-ui/core';
import { DateTime } from 'luxon';
import React from 'react';

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
    return <CardHeader title={title} subheader={subheader} avatar={<Avatar alt={title} src={logoUrl} />} />;
};

export default TimeIntervalCardHeader;
