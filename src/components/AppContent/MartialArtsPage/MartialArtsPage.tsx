import { Container, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import useMartialArt from 'hooks/useMartialArt';
import React from 'react';
import { MartialArt, MartialArtsStyle } from 'types/martialArts';

import sharedStyles from '../../shared/shared.styles';
import martialArtsPageStyles from './MartialArtsPage.styles';
import StudioGrid from './StudioGrid';

interface MartialArtsPageProps {
    martialArtsStyle: MartialArtsStyle;
}

const MartialArtsPage: React.FC<MartialArtsPageProps> = ({ martialArtsStyle }: MartialArtsPageProps) => {
    const classes = martialArtsPageStyles();
    const shared = sharedStyles();
    const martialArt: MartialArt | undefined = useMartialArt(martialArtsStyle);
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
    return martialArt ? (
        <div className={clsx(shared.bg, classes.bg)}>
            <Container maxWidth="lg" className={classes.contentBg}>
                <div className={classes.pageHeading}>
                    {isLarge && <img src={martialArt.logoUrl} alt={`${martialArt.style}_logo`} />}
                    <Typography variant="h1" align="center" className={classes.title}>
                        {martialArt.styleName}
                    </Typography>
                    {isLarge && <img src={martialArt.logoUrl} alt={`${martialArt.style}_logo`} />}
                </div>
                <Typography variant="h4" align="center" className={classes.rank}>
                    Current Rank: {martialArt.blackBeltRank} 단
                </Typography>
                <Grid container spacing={3} className={classes.pageContent}>
                    <Grid xs={12} lg={6}>
                        <Typography paragraph className={classes.introduction}>
                            {martialArt.introduction}
                        </Typography>
                        <Typography paragraph>{martialArt.biography}</Typography>
                    </Grid>
                    <Grid xs={12} lg={6} className={classes.picContainer}>
                        <figure className={classes.pic}>
                            <img className={classes.picImg} src={martialArt.imgUrl} alt={`${martialArt.style}_img`} />
                            <figcaption className={classes.picCaption}>
                                <Typography variant="subtitle1" align="center">
                                    {martialArt.imgCaption}
                                </Typography>
                            </figcaption>
                        </figure>
                    </Grid>
                </Grid>
                <StudioGrid studios={martialArt.studios} />
            </Container>
        </div>
    ) : null;
};

export default MartialArtsPage;
