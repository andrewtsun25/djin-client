import { Grow, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Background from 'components/shared/Background';
import { Urls } from 'const/urls';
import React from 'react';

import homePageStyles from './HomePage.styles';

const homeBg = `${Urls.AssetRoot}/home/bg/huntington_beach_bg.jpg`;

const HomePage: React.FC = () => {
    const classes = homePageStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Background imageUrl={homeBg} className={classes.center}>
            <Grow in>
                <div className={classes.pageContent}>
                    <Typography variant={isSmall ? 'h3' : 'h1'} align="center" aria-label="Home Page Title">
                        d.jin
                    </Typography>
                    <Typography
                        paragraph
                        variant={isSmall ? 'body1' : 'h6'}
                        align="center"
                        aria-label="Home Page Description"
                    >
                        d.jin is a coder, music producer, DJ, and martial artist hailing from the sun-soaked shores of
                        SoCal.
                    </Typography>
                </div>
            </Grow>
        </Background>
    );
};

export default HomePage;
