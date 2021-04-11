import { render } from '@testing-library/react';
import React from 'react';

import { CURRENT_BADGE_TEST_ID, DurationWithOrganizationCardHeader } from './DurationWithOrganizationCardHeader';

describe('DurationWithOrganizationCardHeader', () => {
    const title = 'title';
    const subTitle = 'subtitle';
    const startDate = new Date('2021-01-01T00:00:00-0800');

    it('renders with an end date specified', () => {
        const endDate = new Date('2021-02-01T00:00:00-0800');
        const { getByText, queryByTestId } = render(
            <DurationWithOrganizationCardHeader
                subtitle={subTitle}
                title={title}
                startDate={startDate}
                endDate={endDate}
            />,
        );
        const dateSubtitle = getByText('Jan 2021 - Feb 2021, subtitle');
        expect(dateSubtitle).toBeInTheDocument();
        const currentBadge = queryByTestId(CURRENT_BADGE_TEST_ID);
        expect(currentBadge).toBeNull();
    });

    it('renders without an end date specified', () => {
        const { getByText, getByTestId } = render(
            <DurationWithOrganizationCardHeader subtitle={subTitle} title={title} startDate={startDate} />,
        );
        const dateSubtitle = getByText('Jan 2021 - Present, subtitle');
        expect(dateSubtitle).toBeInTheDocument();
        const currentBadge = getByTestId(CURRENT_BADGE_TEST_ID);
        expect(currentBadge).toBeInTheDocument();
    });
});
