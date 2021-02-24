import { CircularProgress, Paper, Typography } from '@material-ui/core';
import Error from '@material-ui/icons/Error';
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
                <CircularProgress color="secondary" />
                <Typography variant="h6">{message}</Typography>
            </Paper>
        </div>
    );
};

export default LoadingView;
