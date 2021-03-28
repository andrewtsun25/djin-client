import { Paper, Typography } from '@material-ui/core';
import Error from '@material-ui/icons/Error';
import clsx from 'clsx';
import React from 'react';
import Linkify from 'react-linkify';

import errorViewStyles from './ErrorView.styles';

interface ErrorViewProps {
    error: Error;
    message: string;
    className?: string;
}

const ERROR_VIEW_MESSAGE_LABEL = 'Error Message';
const ERROR_VIEW_STACK_TRACE_LABEL = 'Error Stack Trace';

const ErrorView: React.FC<ErrorViewProps> = ({ error, message, className }: ErrorViewProps) => {
    const classes = errorViewStyles();
    return (
        <div className={classes.root}>
            <Paper className={clsx(classes.content, className)}>
                <div className={classes.colorApplication}>
                    <Error color="error" fontSize="large" />
                    <Typography paragraph variant="h5" aria-label={ERROR_VIEW_MESSAGE_LABEL}>
                        {message}
                    </Typography>
                    {process.env.NODE_ENV === 'development' && (
                        <Typography paragraph className={classes.stackTrace} aria-label={ERROR_VIEW_STACK_TRACE_LABEL}>
                            <Linkify>{error.stack}</Linkify>
                        </Typography>
                    )}
                </div>
            </Paper>
        </div>
    );
};

export { ERROR_VIEW_MESSAGE_LABEL, ERROR_VIEW_STACK_TRACE_LABEL, ErrorView };
export type { ErrorViewProps };
