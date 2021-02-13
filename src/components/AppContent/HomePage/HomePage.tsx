import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import sharedStyles from 'components/shared/shared.styles';
import React from 'react';

import aboutPageStyles from './HomePage.styles';

const HomePage: React.FC = () => {
    const classes = aboutPageStyles();
    const shared = sharedStyles();
    return (
        <div className={clsx(shared.bg, classes.bg, classes.center)}>
            <div className={classes.pageContent}>
                <Typography variant="h1" align="center">
                    d.jin
                </Typography>
                <Typography paragraph variant="h6" align="center">
                    d.jin is a coder, music producer, DJ, and martial artist hailing from the sun-soaked shores of
                    SoCal.
                </Typography>
            </div>
        </div>
    );
};

export default HomePage;
