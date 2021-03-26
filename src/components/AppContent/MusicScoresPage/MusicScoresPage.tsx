import { Container, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Background } from 'components/shared';
import { Urls } from 'const/urls';
import React from 'react';

import musicScoresPageStyles from './MusicScoresPage.styles';
import ScoresList from './ScoresList';

const musicScoresBg = `${Urls.AssetRoot}/music/bg/music_score_bg.jpeg`;

const MusicScoresPage: React.FC = () => {
    const classes = musicScoresPageStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Background imageUrl={musicScoresBg} tint={false}>
            <Container maxWidth="lg">
                <Typography variant={isSmall ? 'h3' : 'h2'} align="center" className={classes.pageTitle}>
                    Music Scores
                </Typography>
                <ScoresList />
            </Container>
        </Background>
    );
};

export default MusicScoresPage;
