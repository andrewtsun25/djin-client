import { render } from '@testing-library/react';
import React from 'react';

import { BULLET_POINT_ROLE, BulletPoints } from './BulletPoints';

describe('BulletPoints', () => {
    const zeroLength = 0;

    it('renders an array of bullet points', () => {
        const inputBulletPoints = ['point1', 'point2', 'point3'];
        const { getAllByRole } = render(<BulletPoints points={inputBulletPoints} />);
        const actualBulletPoints = getAllByRole(BULLET_POINT_ROLE).map((item) => item.textContent);
        expect(actualBulletPoints).toEqual(inputBulletPoints);
    });

    it('renders nothing if an empty array of bullet points was passed in', () => {
        const { queryAllByRole } = render(<BulletPoints points={[]} />);
        const actualBulletPoints = queryAllByRole(BULLET_POINT_ROLE);
        expect(actualBulletPoints).toHaveLength(zeroLength);
    });

    it('renders nothing if a null array of bullet points was passed in', () => {
        const { queryAllByRole } = render(<BulletPoints points={null} />);
        const actualBulletPoints = queryAllByRole(BULLET_POINT_ROLE);
        expect(actualBulletPoints).toHaveLength(zeroLength);
    });

    it('renders nothing if an undefined array of bullet points was passed in', () => {
        const { queryAllByRole } = render(<BulletPoints points={undefined} />);
        const actualBulletPoints = queryAllByRole(BULLET_POINT_ROLE);
        expect(actualBulletPoints).toHaveLength(zeroLength);
    });
});
