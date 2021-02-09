import { Container, Grid, Link, Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ShopIcon from '@material-ui/icons/Shop';
import WebIcon from '@material-ui/icons/Web';
import YouTubeIcon from '@material-ui/icons/YouTube';
import gameImg from 'assets/reclaimer/media/reclaimer_game.png';
import React from 'react';

import IconLink from '../../shared/IconLink';
import reclaimerPageStyles from './ReclaimerPage.styles';

const RECLAIMER_LINK = 'https://alextomkow.itch.io/reclaimer';

const ReclaimerPage: React.FC = () => {
    const classes = reclaimerPageStyles();
    return (
        <Container maxWidth="lg">
            <Typography variant="h1" align="center">
                Reclaimer
            </Typography>
            <div className={classes.centeringContainer}>
                <img src={gameImg} alt="Reclaimer Game Image" className={classes.reclaimerImg} />
            </div>
            <div className={classes.centeringContainer}>
                <IconLink
                    href="https://play.google.com/store/apps/details?id=com.RedPandaStudios.Reclaimer"
                    text="Play Reclaimer Now on Android"
                    icon={<ShopIcon />}
                    className={classes.reclaimerPlayLink}
                />
            </div>
            <Typography paragraph>
                <Link href={RECLAIMER_LINK} target="_blank" rel="noopener noreferrer">
                    Reclaimer
                </Link>{' '}
                is a mobile game developed on Unity in C#, playable on both Android and iOS. The game was developed for
                an elective course, CSCI-599: Mobile Social Games, at USC from January 2020 to May 2020. Players start
                in a jail cell and have to escape the dungeon. Along the way, they can pick up weapons and items in the
                environment, and fight medieval enemies that stand in the way of their escape.
            </Typography>
            <Typography paragraph>
                Fighting takes place with Infinity Blade-style combat. Players can attack in 4 directions using
                single-finger swipes. Every so often, an enemy’s attack will be signaled by arrows on screen. Blocking
                is accomplished by swiping with two fingers in the direction of the arrows. Failure to do so results in
                getting hit. Players are rewarded to respond quickly; “perfect” blocks on-time result in a powerful
                counterattack dealt to the enemy.
            </Typography>
            <Typography paragraph>
                Players can get coins from the environment, opening chests, and defeating enemies. These coins can be
                traded for stronger items in the dungeon’s shop.
            </Typography>
            <Typography paragraph>
                My role on the team is the data analyst. For every event worth tracking (fighting enemies, combat
                techniques, item purchases and usage, etc.), I created analytics hooks to funnel Unity Analytics events
                into a dashboard. From these events, I delivered weekly reports detailing user activity in-game,
                providing evidence-based feedback to class professors and the rest of my development team on new
                features to develop, or existing features to re-adjust.
            </Typography>
            <Typography paragraph>
                Media-wise, I also helped develop the video used in the trailer and composed the music for the
                soundtrack. I also helped manage app publishing to the Google Play Services.
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} lg={4}>
                    <div className={classes.centeringContainer}>
                        <IconLink
                            href={RECLAIMER_LINK}
                            text="Official Game Site"
                            icon={<WebIcon />}
                            className={classes.reclaimerLink}
                        />
                    </div>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <div className={classes.centeringContainer}>
                        <IconLink
                            href="https://docs.google.com/document/d/1kCaNgljvQoYSivE1K8k4781hS_qSFREjGe788UiPb6M/edit"
                            text="Game Design Document"
                            icon={<DescriptionIcon />}
                            className={classes.reclaimerLink}
                        />
                    </div>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <div className={classes.centeringContainer}>
                        <IconLink
                            href="https://soundcloud.com/djtaeyong/sets/reclaimer-ost"
                            text="Reclaimer OST"
                            icon={<MusicNoteIcon />}
                            className={classes.reclaimerLink}
                        />
                    </div>
                </Grid>
                <Grid item sm={12} md={6}>
                    <div className={classes.centeringContainer}>
                        <IconLink
                            href="https://www.youtube.com/watch?v=iCcWpw9RU9g"
                            text="Trailer"
                            icon={<YouTubeIcon />}
                            className={classes.reclaimerLink}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <div className={classes.centeringContainer}>
                        <IconLink
                            href="https://play.google.com/store/apps/details?id=com.RedPandaStudios.Reclaimer"
                            text="Source Code"
                            icon={<GitHubIcon />}
                            className={classes.reclaimerLink}
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ReclaimerPage;
