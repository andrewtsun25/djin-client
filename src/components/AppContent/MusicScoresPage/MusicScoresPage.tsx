import { Container, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
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
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div className={clsx(shared.bg, classes.bg)}>
            <Container maxWidth="lg">
                <Typography variant={isSmall ? 'h3' : 'h2'} align="center" className={classes.pageTitle}>
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
