import { Container, Grid, Typography } from '@material-ui/core';
import useMartialArt from 'hooks/useMartialArt';
import React from 'react';
import { MartialArt, MartialArtsStyle } from 'types/martialArts';

import DojangGrid from './DojangGrid';
import martialArtsPageStyles from './MartialArtsPage.styles';

interface MartialArtsPageProps {
    martialArtsStyle: MartialArtsStyle;
}

const MartialArtsPage: React.FC<MartialArtsPageProps> = ({ martialArtsStyle }: MartialArtsPageProps) => {
    const classes = martialArtsPageStyles();
    const martialArt: MartialArt | undefined = useMartialArt(martialArtsStyle);
    return martialArt ? (
        <Container maxWidth="lg">
            <div className={classes.pageHeading}>
                <img src={martialArt.logoUrl} alt={`${martialArt.style}_logo`} className={classes.styleLogoImg} />
                <Typography variant="h3" align="center" className={classes.title}>
                    {martialArt.styleName}
                </Typography>
                <img src={martialArt.logoUrl} alt={`${martialArt.style}_logo`} className={classes.styleLogoImg} />
            </div>
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
                        <figcaption className={classes.picCaption}>{martialArt.imgCaption}</figcaption>
                    </figure>
                </Grid>
            </Grid>
            <DojangGrid dojangs={martialArt.studios} />
        </Container>
    ) : null;
};

export default MartialArtsPage;
