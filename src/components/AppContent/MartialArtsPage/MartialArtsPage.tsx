import { Container, Fade, Grid, Grow, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Background from 'components/shared/Background';
import useMartialArt from 'hooks/useMartialArt';
import React from 'react';
import { MartialArt, MartialArtsType } from 'types/martialArts';

import martialArtsPageStyles from './MartialArtsPage.styles';
import StudioGrid from './StudioGrid';

const martialArtsBg = 'https://storage.googleapis.com/storage.djin.dev/martialArts/bg/taeryong_studio_bg.png';

interface MartialArtsPageProps {
    martialArtsStyle: MartialArtsType;
}

const MartialArtsPage: React.FC<MartialArtsPageProps> = ({ martialArtsStyle }: MartialArtsPageProps) => {
    const classes = martialArtsPageStyles();
    const martialArt: MartialArt | undefined = useMartialArt(martialArtsStyle);
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    return (
        <Background tint={false} imageUrl={martialArtsBg}>
            {martialArt ? (
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
                                <Typography paragraph>{martialArt.biography}</Typography>
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
                        <StudioGrid studios={martialArt.studios} />
                    </Container>
                </Fade>
            ) : null}
        </Background>
    );
};

export default MartialArtsPage;
