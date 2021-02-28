import { Container, Fade, Grid, Grow, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useMartialArtsStyles } from 'api/martialArts';
import ErrorView from 'components/shared/ErrorView';
import LoadingView from 'components/shared/LoadingView';
import { ResponsiveGrid } from 'components/shared/ResponsiveGrid';
import firebase from 'firebase';
import { first, isNil } from 'lodash';
import React, { useMemo } from 'react';
import { MartialArtsStyle, MartialArtsStyleType } from 'types/martialArts';
import { isNotNil } from 'utils/general';

import martialArtsPageContentStyles from './MartialArtsPageContent.styles';
import StudioGridTile from './StudioGridTile';

type DocumentReference = firebase.firestore.DocumentReference;

interface MartialArtsPageContentProps {
    martialArtsStyle: MartialArtsStyleType;
}

const MartialArtsPageContent: React.FC<MartialArtsPageContentProps> = ({
    martialArtsStyle,
}: MartialArtsPageContentProps) => {
    const classes = martialArtsPageContentStyles();
    const { martialArts, error } = useMartialArtsStyles(martialArtsStyle);
    const martialArt: MartialArtsStyle | undefined = useMemo(() => first(martialArts), [martialArts]);
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    // Error state
    if (isNotNil(error)) {
        return <ErrorView error={error} message={'Martial art information unavailable.'} />;
    }

    // Loading state
    if (isNil(martialArt)) {
        return <LoadingView message="Loading martial art..." />;
    }

    // Success state
    const renderGridTile = (studioRef: DocumentReference, index: number): JSX.Element => (
        <StudioGridTile studioRef={studioRef} key={index} />
    );
    const { logoUrl, type, name, description, biography, blackBeltRank, mediaUrl, mediaCaption, studios } = martialArt;
    return (
        <Fade in>
            <Container maxWidth="lg" className={classes.contentBg}>
                <header className={classes.pageHeading}>
                    {isLarge && <img src={logoUrl} alt={`${type}_logo`} />}
                    <Typography variant={isLarge ? 'h1' : 'h3'} align="center" className={classes.title}>
                        {name}
                    </Typography>
                    {isLarge && <img src={logoUrl} alt={`${type}_logo`} />}
                </header>
                <Typography variant={isLarge ? 'h4' : 'h5'} align="center" className={classes.rank}>
                    Current Rank: {blackBeltRank} 단
                </Typography>
                <Grid container spacing={3} className={classes.pageContent}>
                    <Grid xs={12} lg={6} item>
                        <Typography paragraph className={classes.description}>
                            {description}
                        </Typography>
                        {biography.map((paragraph: string, index: number) => (
                            <Typography paragraph key={index}>
                                {paragraph}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid xs={12} lg={6} className={classes.picContainer} item>
                        <Grow in>
                            <figure className={classes.pic}>
                                <img className={classes.picImg} src={mediaUrl} alt={`${type}_img`} />
                                <figcaption className={classes.picCaption}>
                                    <Typography variant="subtitle1" align="center">
                                        {mediaCaption}
                                    </Typography>
                                </figcaption>
                            </figure>
                        </Grow>
                    </Grid>
                </Grid>
                <section className={classes.studioGridRoot}>
                    <Typography variant="h2" align="center" className={classes.studioGridTitle}>
                        Studios
                    </Typography>
                    <ResponsiveGrid items={studios} renderGridTile={renderGridTile} />
                </section>
            </Container>
        </Fade>
    );
};

export default MartialArtsPageContent;
