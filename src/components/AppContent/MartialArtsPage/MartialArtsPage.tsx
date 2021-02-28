import Background from 'components/shared/Background';
import { Urls } from 'const/urls';
import React from 'react';
import { MartialArtsStyleType } from 'types/martialArts';

import martialArtsPageStyles from './MartialArtsPage.styles';
import MartialArtsPageContent from './MartialArtsPageContent';

const martialArtsBg = `${Urls.AssetRoot}/martialArts/bg/taeryong_studio_bg.png`;

interface MartialArtsPageProps {
    martialArtsStyle: MartialArtsStyleType;
}

const MartialArtsPage: React.FC<MartialArtsPageProps> = ({ martialArtsStyle }: MartialArtsPageProps) => {
    const classes = martialArtsPageStyles();
    return (
        <Background tint={false} imageUrl={martialArtsBg} className={classes.bg}>
            <MartialArtsPageContent martialArtsStyle={martialArtsStyle} />
        </Background>
    );
};

export default MartialArtsPage;
