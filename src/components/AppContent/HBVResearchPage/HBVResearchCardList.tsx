import { useHbvResearchPapers } from 'api/hbvResearch';
import { ErrorView, LoadingView } from 'components/shared';
import { isNil } from 'lodash';
import React from 'react';
import { isNotNil } from 'utils/general';

import HBVResearchCard from './HBVResearchCard';

const HBVResearchCardList: React.FC = () => {
    const { hbvResearchPapers, error } = useHbvResearchPapers();

    if (isNotNil(error)) {
        return <ErrorView error={error} message="HBV Research Papers unavailable." />;
    }

    if (isNil(hbvResearchPapers)) {
        return <LoadingView message="Loading HBV Research Papers..." />;
    }

    return hbvResearchPapers.length > 0 ? (
        <>
            {hbvResearchPapers.map((research, index) => (
                <HBVResearchCard research={research} key={index} />
            ))}
        </>
    ) : null;
};

export default HBVResearchCardList;
