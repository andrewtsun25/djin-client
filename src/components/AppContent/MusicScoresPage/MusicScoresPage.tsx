import { Container, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MusicAPI from 'api/MusicAPI';
import Background from 'components/shared/Background';
import ErrorView from 'components/shared/ErrorView';
import LoadingView from 'components/shared/LoadingView';
import { Urls } from 'const/urls';
import React from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { MusicScore } from 'types/music';

import MusicScoreGrid from './MusicScoresGrid';
import musicScoresPageStyles from './MusicScoresPage.styles';

const musicScoresBg = `${Urls.AssetRoot}/music/bg/music_score_bg.jpeg`;

const MusicScoresPage: React.FC = () => {
    const classes = musicScoresPageStyles();
    const [musicScores, loading, error] = useCollectionDataOnce<MusicScore>(MusicAPI.getScores());
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Background imageUrl={musicScoresBg} tint={false}>
            <Container maxWidth="lg">
                <Typography variant={isSmall ? 'h3' : 'h2'} align="center" className={classes.pageTitle}>
                    Music Scores
                </Typography>
                {musicScores &&
                    musicScores.map((musicScore) => <MusicScoreGrid musicScore={musicScore} key={musicScore.name} />)}
                {loading && <LoadingView message="Loading Music Scores..." />}
                {error && <ErrorView error={error} message="Music Scores unavailable." />}
            </Container>
        </Background>
    );
};

export default MusicScoresPage;
