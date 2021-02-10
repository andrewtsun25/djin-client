import { Container, Typography } from '@material-ui/core';
import useMusicScores from 'hooks/useMusicScores';
import React from 'react';

import MusicScoreGrid from './MusicScoreGrid';

const MusicScoresPage: React.FC = () => {
    const musicScores = useMusicScores();
    return (
        <Container maxWidth="lg">
            <Typography variant="h1" align="center">
                Music Scores
            </Typography>
            {musicScores.map((musicScore) => (
                <MusicScoreGrid musicScore={musicScore} key={musicScore.title} />
            ))}
        </Container>
    );
};

export default MusicScoresPage;
