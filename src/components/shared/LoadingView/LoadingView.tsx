import { CircularProgress, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

import loadingViewStyles from './LoadingView.styles';

interface LoadingViewProps {
    message: string;
    className?: string;
}

const LoadingView: React.FC<LoadingViewProps> = ({ message, className }: LoadingViewProps) => {
    const classes = loadingViewStyles();
    return (
        <div className={clsx(classes.root, className)}>
            <Paper className={classes.content}>
                <div className={classes.colorApplication}>
                    <CircularProgress color="secondary" />
                    <Typography variant="h6">{message}</Typography>
                </div>
            </Paper>
        </div>
    );
};

export default LoadingView;
export type { LoadingViewProps };
