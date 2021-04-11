import { Typography } from '@material-ui/core';
import { Background } from 'components/shared';
import { Urls } from 'const/urls';
import React from 'react';
import Embed from 'react-embed';

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
                <Embed url={`${Urls.SoundCloudRoot}/sets/edm`} />
            </article>
        </Background>
    );
};

export default EDMPage;
