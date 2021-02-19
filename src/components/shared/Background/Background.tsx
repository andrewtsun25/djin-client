import { useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

import backgroundStyles from './Background.styles';

interface BackgroundProps {
    className?: string;
    imageUrl?: string;
    color?: string;
    tint?: boolean;
}

const Background: React.FC<BackgroundProps> = ({
    imageUrl,
    tint = false,
    color,
    children,
    className,
}: PropsWithChildren<BackgroundProps>) => {
    const classes = backgroundStyles();
    const theme = useTheme();
    const tintOpacity = tint ? 0.5 : 0;
    return (
        <div className={classes.bg} style={{ backgroundImage: `url(${imageUrl})`, backgroundColor: color }}>
            <div
                className={clsx(classes.colorBg, className)}
                style={{ backgroundColor: fade(theme.palette.common.black, tintOpacity) }}
            >
                {children}
            </div>
        </div>
    );
};

export default Background;
