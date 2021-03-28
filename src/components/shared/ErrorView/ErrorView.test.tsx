import { render } from '@testing-library/react';
import React from 'react';

import { ERROR_VIEW_MESSAGE_LABEL, ERROR_VIEW_STACK_TRACE_LABEL, ErrorView } from './ErrorView';

describe('ErrorView', () => {
    it('renders', () => {
        const message = 'Error Message';
        const stackTrace = 'Error Stack Trace';
        const error = new Error(stackTrace);
        const { getByLabelText } = render(<ErrorView error={error} message={message} />);
        const errorMessageComponent = getByLabelText(ERROR_VIEW_MESSAGE_LABEL);
        expect(errorMessageComponent).toHaveTextContent(message);
        if (process.env.NODE_ENV === 'development') {
            const errorStackTraceComponent = getByLabelText(ERROR_VIEW_STACK_TRACE_LABEL);
            expect(errorStackTraceComponent).toHaveTextContent(stackTrace);
        }
    });
});
