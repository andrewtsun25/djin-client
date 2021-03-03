import { Typography } from '@material-ui/core';
import Background from 'components/shared/Background';
import React from 'react';
import Embed from 'react-embed';

import { Urls } from '../../../const/urls';
import edmPageStyles from './EDMPage.styles';

const edcBg = `${Urls.AssetRoot}/music/bg/edc_bg.jpg`;

const EDMPage: React.FC = () => {
    const classes = edmPageStyles();
    return (
        <Background imageUrl={edcBg} tint>
            <Typography variant="h2" align="center" className={classes.pageTitle}>
                EDM Tracks
            </Typography>
            <article className={classes.content}>
                <Embed url="https://soundcloud.com/djtaeyong/sets/edm" />
            </article>
        </Background>
    );
};

export default EDMPage;
