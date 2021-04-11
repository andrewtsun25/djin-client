import { Grid } from '@material-ui/core';
import { useEmployments } from 'api/employment';
import { ErrorView, LoadingView } from 'components/shared';
import { isNil } from 'lodash';
import React from 'react';
import { isNotNil } from 'utils/general';

import EmploymentCard from './EmploymentCard';

const EmploymentCardGrid: React.FC = () => {
    const { employments, error } = useEmployments();

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
        <Grid container direction="row">
            {employments.map((employment, index) => (
                <EmploymentCard employment={employment} key={index} />
            ))}
        </Grid>
    );
};

export default EmploymentCardGrid;
