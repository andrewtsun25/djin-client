import { Container, Typography } from '@material-ui/core';
import useMusicScores from 'hooks/useMusicScores';
import React from 'react';

import MusicScoreGrid from './MusicScoresGrid';
import musicScoresPageStyles from './MusicScoresPage.styles';

const MusicScoresPage: React.FC = () => {
    const classes = musicScoresPageStyles();
    const musicScores = useMusicScores();
    return (
        <Container maxWidth="lg">
            <Typography variant="h2" align="center" className={classes.pageTitle}>
                Music Scores
            </Typography>
            {musicScores.map((musicScore) => (
                <MusicScoreGrid musicScore={musicScore} key={musicScore.title} />
            ))}
        </Container>
    );
};

export default MusicScoresPage;
