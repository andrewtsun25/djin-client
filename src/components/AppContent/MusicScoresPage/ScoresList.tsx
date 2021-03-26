import { useMusicScores } from 'api/music';
import { LoadingView } from 'components/shared';
import ErrorView from 'components/shared/ErrorView';
import { isNil } from 'lodash';
import React from 'react';
import { isNotNil } from 'utils/general';

import SectionGrid from './SectionGrid';

const ScoresList: React.FC = () => {
    const { scores, error } = useMusicScores();

    // Error state
    if (isNotNil(error)) {
        return <ErrorView error={error} message="Music Scores unavailable." />;
    }

    // Loading state
    if (isNil(scores)) {
        return <LoadingView message="Loading Music Scores..." />;
    }

    // Success state
    return (
        <>
            {scores.map((musicScore) => (
                <SectionGrid musicScore={musicScore} key={musicScore.name} />
            ))}
        </>
    );
};

export default ScoresList;
