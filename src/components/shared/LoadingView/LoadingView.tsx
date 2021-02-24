import { Paper, Typography } from '@material-ui/core';
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
        <Paper className={clsx(classes.root, className)}>
            <Error color="error" fontSize="large" />
            <Typography paragraph>{message}</Typography>
        </Paper>
    );
};

export default LoadingView;
