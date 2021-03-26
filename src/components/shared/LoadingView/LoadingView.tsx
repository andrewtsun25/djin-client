import { CircularProgress, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';

import loadingViewStyles from './LoadingView.styles';

interface LoadingViewProps {
    message: string;
    className?: string;
    style?: CSSProperties;
}

const LoadingView: React.FC<LoadingViewProps> = ({ message, className, style }: LoadingViewProps) => {
    const classes = loadingViewStyles();
    return (
        <div className={clsx(classes.root, className)} style={style}>
            <Paper className={classes.content}>
                <div className={classes.colorApplication}>
                    <CircularProgress color="secondary" />
                    <Typography variant="h6">{message}</Typography>
                </div>
            </Paper>
        </div>
    );
};

export { LoadingView };
export type { LoadingViewProps };
