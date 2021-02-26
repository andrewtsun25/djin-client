import { Container, Fade, Grid, Grow, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MartialArtsAPI from 'api/MartialArtsAPI';
import Background from 'components/shared/Background';
import ErrorView from 'components/shared/ErrorView';
import LoadingView from 'components/shared/LoadingView';
import { ResponsiveGrid } from 'components/shared/ResponsiveGrid';
import { Urls } from 'const/urls';
import firebase from 'firebase';
import { first, isArray } from 'lodash';
import React, { useMemo } from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { MartialArtsStyleType, MartialArtStyle } from 'types/martialArts';

import martialArtsPageStyles from './MartialArtsPage.styles';
import StudioGridTile from './StudioGridTile';

type DocumentReference = firebase.firestore.DocumentReference;

const martialArtsBg = `${Urls.AssetRoot}/martialArts/bg/taeryong_studio_bg.png`;

interface MartialArtsPageProps {
    martialArtsStyle: MartialArtsStyleType;
}

const MartialArtsPage: React.FC<MartialArtsPageProps> = ({ martialArtsStyle }: MartialArtsPageProps) => {
    const classes = martialArtsPageStyles();
    const [martialArts, loading, error] = useCollectionDataOnce<MartialArtStyle>(
        MartialArtsAPI.getStyle(martialArtsStyle),
    );
    const martialArt: MartialArtStyle | undefined = useMemo(() => first(martialArts), [martialArts]);
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const renderGridTile = (studioRef: DocumentReference, index: number): JSX.Element => (
        <StudioGridTile studioRef={studioRef} key={index} />
    );
    return (
        <Background tint={false} imageUrl={martialArtsBg} className={classes.bg}>
            {error && <ErrorView error={error} message={'Martial Arts information unavailable.'} />}
            {loading && <LoadingView message="Loading martial arts..." />}
            {martialArt && (
                <Fade in>
                    <Container maxWidth="lg" className={classes.contentBg}>
                        <div className={classes.pageHeading}>
                            {isLarge && <img src={martialArt.logoUrl} alt={`${martialArt.type}_logo`} />}
                            <Typography variant={isLarge ? 'h1' : 'h2'} align="center" className={classes.title}>
                                {martialArt.name}
                            </Typography>
                            {isLarge && <img src={martialArt.logoUrl} alt={`${martialArt.type}_logo`} />}
                        </div>
                        <Typography variant={isLarge ? 'h4' : 'h5'} align="center" className={classes.rank}>
                            Current Rank: {martialArt.blackBeltRank} 단
                        </Typography>
                        <Grid container spacing={3} className={classes.pageContent}>
                            <Grid xs={12} lg={6} item>
                                <Typography paragraph className={classes.description}>
                                    {martialArt.description}
                                </Typography>
                                {martialArt.biography.map((paragraph: string, index: number) => (
                                    <Typography paragraph key={index}>
                                        {paragraph}
                                    </Typography>
                                ))}
                            </Grid>
                            <Grid xs={12} lg={6} className={classes.picContainer} item>
                                <Grow in>
                                    <figure className={classes.pic}>
                                        <img
                                            className={classes.picImg}
                                            src={martialArt.mediaUrl}
                                            alt={`${martialArt.type}_img`}
                                        />
                                        <figcaption className={classes.picCaption}>
                                            <Typography variant="subtitle1" align="center">
                                                {martialArt.mediaCaption}
                                            </Typography>
                                        </figcaption>
                                    </figure>
                                </Grow>
                            </Grid>
                        </Grid>
                        <div className={classes.studioGridRoot}>
                            <Typography variant="h2" align="center" className={classes.studioGridTitle}>
                                Studios
                            </Typography>
                            <ResponsiveGrid items={martialArt.studios} renderGridTile={renderGridTile} />
                        </div>
                    </Container>
                </Fade>
            )}
        </Background>
    );
};

export default MartialArtsPage;
