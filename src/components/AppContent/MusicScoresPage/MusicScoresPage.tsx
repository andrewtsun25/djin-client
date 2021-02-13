import { Container, Typography } from '@material-ui/core';
import clsx from 'clsx';
import sharedStyles from 'components/shared/shared.styles';
import useMusicScores from 'hooks/useMusicScores';
import React from 'react';

import MusicScoreGrid from './MusicScoresGrid';
import musicScoresPageStyles from './MusicScoresPage.styles';

const MusicScoresPage: React.FC = () => {
    const classes = musicScoresPageStyles();
    const shared = sharedStyles();
    const musicScores = useMusicScores();
    return (
        <div className={clsx(shared.bg, classes.bg)}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" className={classes.pageTitle}>
                    Music Scores
                </Typography>
                {musicScores.map((musicScore) => (
                    <MusicScoreGrid musicScore={musicScore} key={musicScore.title} />
                ))}
            </Container>
        </div>
    );
};

export default MusicScoresPage;
