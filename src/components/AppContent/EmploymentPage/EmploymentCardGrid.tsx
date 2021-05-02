import { Grid } from '@material-ui/core';
import { useEmployments } from 'api/employment';
import { ErrorView, LoadingView } from 'components/shared';
import { isNil } from 'lodash';
import React, { useState } from 'react';
import { Builder, BuilderProps, Query } from 'react-awesome-query-builder';
import { isNotNil } from 'utils/general';
import { createDefaultTreeForConfig } from 'utils/qb';

import EmploymentCard from './EmploymentCard';
import config from './EmploymentPage.qbconfig';

const renderBuilder = (props: BuilderProps): JSX.Element => (
    <div className="query-builder-container" style={{ padding: '10px' }}>
        <div className="query-builder qb-lite">
            <Builder {...props} />
        </div>
    </div>
);

const EmploymentCardGrid: React.FC = () => {
    const { employments, error } = useEmployments();
    const [tree, setTree] = useState(createDefaultTreeForConfig(config));

    // Error state
    if (isNotNil(error)) {
        return <ErrorView error={error} message="Employment information unavailable." />;
    }

    // Loading state
    if (isNil(employments)) {
        return <LoadingView message="Loading employment information..." />;
    }

    // Success state
    return (
        <>
            <Query {...config} value={tree} onChange={setTree} renderBuilder={renderBuilder} />
            <Grid container direction="row">
                {employments.map((employment, index) => (
                    <EmploymentCard employment={employment} key={index} />
                ))}
            </Grid>
        </>
    );
};

export default EmploymentCardGrid;
