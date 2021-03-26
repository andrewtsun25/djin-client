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

const ErrorView: React.FC<ErrorViewProps> = ({ error, message, className }: ErrorViewProps) => {
    const classes = errorViewStyles();
    return (
        <div className={classes.root}>
            <Paper className={clsx(classes.content, className)}>
                <div className={classes.colorApplication}>
                    <Error color="error" fontSize="large" />
                    <Typography paragraph variant="h5">
                        {message}
                    </Typography>
                    {process.env.NODE_ENV === 'development' && (
                        <Typography paragraph className={classes.stackTrace}>
                            <Linkify>{error.stack}</Linkify>
                        </Typography>
                    )}
                </div>
            </Paper>
        </div>
    );
};

export { ErrorView };
export type { ErrorViewProps };
