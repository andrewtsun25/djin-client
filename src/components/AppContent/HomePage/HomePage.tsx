import { Grow, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import sharedStyles from 'components/shared/shared.styles';
import React from 'react';

import aboutPageStyles from './HomePage.styles';

const HomePage: React.FC = () => {
    const classes = aboutPageStyles();
    const shared = sharedStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <div className={clsx(shared.bg, classes.bg, classes.center)}>
            <Grow in>
                <div className={classes.pageContent}>
                    <Typography variant={isSmall ? 'h3' : 'h1'} align="center">
                        d.jin
                    </Typography>
                    <Typography paragraph variant={isSmall ? 'body1' : 'h6'} align="center">
                        d.jin is a coder, music producer, DJ, and martial artist hailing from the sun-soaked shores of
                        SoCal.
                    </Typography>
                </div>
            </Grow>
        </div>
    );
};

export default HomePage;
