import { Avatar, CardHeader } from '@material-ui/core';
import { DateTime } from 'luxon';
import React from 'react';
import { Nilable } from 'types/alias';
import { isNotNil } from 'utils/general';

import StyledBadge from './StyledBadge';

interface DurationWithOrganizationCardHeaderProps {
    title: string;
    subtitle: string;
    startDate: Date;
    endDate?: Date | null;
    logoUrl?: string;
}

const CURRENT_BADGE_TEST_ID = 'Current Badge';

const DurationWithOrganizationCardHeader: React.FC<DurationWithOrganizationCardHeaderProps> = ({
    title,
    subtitle,
    startDate,
    endDate,
    logoUrl,
}: DurationWithOrganizationCardHeaderProps) => {
    const startDateTime: DateTime = DateTime.fromJSDate(startDate);
    const { monthShort: startDateMonth, year: startDateYear } = startDateTime;
    const endDateTime: Nilable<DateTime> = isNotNil(endDate) ? DateTime.fromJSDate(endDate) : endDate;
    const subheader = isNotNil(endDateTime)
        ? `${startDateMonth} ${startDateYear} - ${endDateTime.monthShort} ${endDateTime.year}, ${subtitle}`
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
            data-testid={CURRENT_BADGE_TEST_ID}
        >
            {baseAvatar}
        </StyledBadge>
    );
    return <CardHeader title={title} subheader={subheader} avatar={avatar} />;
};

export { CURRENT_BADGE_TEST_ID, DurationWithOrganizationCardHeader };
export type { DurationWithOrganizationCardHeaderProps };
