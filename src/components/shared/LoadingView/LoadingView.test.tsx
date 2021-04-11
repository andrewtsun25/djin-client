import { render } from '@testing-library/react';
import React from 'react';

import { LOADING_MESSAGE_LABEL, LoadingView } from './LoadingView';

describe('LoadingView', () => {
    it('renders', () => {
        const message = 'Loading Message';
        const { getByLabelText } = render(<LoadingView message={message} />);
        const loadingMessageComponent = getByLabelText(LOADING_MESSAGE_LABEL);
        expect(loadingMessageComponent).toHaveTextContent(message);
    });
});
