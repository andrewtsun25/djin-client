import { Container, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import musicScoreBg from 'assets/music/media/music_score_bg.jpeg';
import Background from 'components/shared/Background';
import useMusicScores from 'hooks/useMusicScores';
import React from 'react';

import MusicScoreGrid from './MusicScoresGrid';
import musicScoresPageStyles from './MusicScoresPage.styles';

const MusicScoresPage: React.FC = () => {
    const classes = musicScoresPageStyles();
    const musicScores = useMusicScores();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Background imageUrl={musicScoreBg} tint={false}>
            <Container maxWidth="lg">
                <Typography variant={isSmall ? 'h3' : 'h2'} align="center" className={classes.pageTitle}>
                    Music Scores
                </Typography>
                {musicScores.map((musicScore) => (
                    <MusicScoreGrid musicScore={musicScore} key={musicScore.title} />
                ))}
            </Container>
        </Background>
    );
};

export default MusicScoresPage;
