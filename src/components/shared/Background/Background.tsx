import { useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import React, { CSSProperties, PropsWithChildren } from 'react';

import backgroundStyles from './Background.styles';

interface BackgroundProps {
    imageUrl?: string;
    color?: string;
    tint?: boolean;
    className?: string;
    style?: CSSProperties;
}

const BACKGROUND_TEST_ID = 'page-background';
const BACKGROUND_TINT_TEST_ID = 'page-background-tint';

const Background: React.FC<BackgroundProps> = ({
    imageUrl,
    tint = false,
    color,
    children,
    className,
    style,
}: PropsWithChildren<BackgroundProps>) => {
    const classes = backgroundStyles();
    const theme = useTheme();
    const tintOpacity = tint ? 0.5 : 0;
    return (
        <div
            className={classes.bg}
            style={{ backgroundImage: `url(${imageUrl})`, backgroundColor: color }}
            data-testid={BACKGROUND_TEST_ID}
        >
            <div
                className={clsx(classes.colorBg, className)}
                style={{ backgroundColor: fade(theme.palette.common.black, tintOpacity), ...style }}
                data-testid={BACKGROUND_TINT_TEST_ID}
            >
                {children}
            </div>
        </div>
    );
};

export { Background, BACKGROUND_TEST_ID, BACKGROUND_TINT_TEST_ID };
export type { BackgroundProps };
