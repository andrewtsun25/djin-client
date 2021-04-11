import { render } from '@testing-library/react';
import React from 'react';

import { Background, BACKGROUND_TEST_ID } from './Background';

describe('Background', () => {
    it('renders with color', () => {
        const color = '#abcdef';
        const { getByTestId } = render(<Background color={color} />);
        const bgElement = getByTestId(BACKGROUND_TEST_ID);
        expect(bgElement).toHaveStyle({ backgroundColor: color });
    });

    it('renders with URL', () => {
        const imageUrl = 'https://image.com/img';
        const { getByTestId } = render(<Background imageUrl={imageUrl} />);
        const bgElement = getByTestId(BACKGROUND_TEST_ID);
        expect(bgElement).toHaveStyle({ backgroundImage: `url(${imageUrl})` });
    });
});
