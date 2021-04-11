import { Home } from '@material-ui/icons';
import { render } from '@testing-library/react';
import React from 'react';

import { ICON_LINK_ARIA_LABEL, IconLink } from './IconLink';

describe('IconLink', () => {
    it('renders', () => {
        const icon = <Home />;
        const text = 'Link';
        const url = 'https://djin.dev';
        const { getByText, getByLabelText } = render(<IconLink icon={icon} text={text} href={url} />);
        const linkText = getByText(text);
        expect(linkText).toHaveTextContent(text);
        const hyperlink = getByLabelText(ICON_LINK_ARIA_LABEL);
        expect(hyperlink).toHaveAttribute('href', url);
    });
});
