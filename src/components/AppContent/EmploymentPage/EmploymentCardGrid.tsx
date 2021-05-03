import { Grid } from '@material-ui/core';
import { Document } from '@nandorojo/swr-firestore';
import { useEmployments } from 'api/employment';
import { ErrorView, LoadingView } from 'components/shared';
import { QueryFilter } from 'components/shared/QueryFilter';
import { isNil } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Employment } from 'types/employment';
import { isNotNil } from 'utils/general';

import EmploymentCard from './EmploymentCard';
import config from './EmploymentPage.qbconfig';

const EmploymentCardGrid: React.FC = () => {
    const { employments, error } = useEmployments();
    const [filteredEmployments, setFilteredEmployments] = useState<Document<Employment>[]>([]);
    const [initialized, setInitialized] = useState(false);

    // Initialize filtered employments to true once loaded
    useEffect(() => {
        if (isNotNil(employments) && !initialized) {
            setFilteredEmployments(employments);
            setInitialized(true);
        }
    }, [initialized, employments]);

    // Error state
    if (isNotNil(error)) {
        return <ErrorView error={error} message="Employment information unavailable." />;
    }

    // Loading state
    if (isNil(employments)) {
        return <LoadingView message="Loading employment information..." />;
    }

    const handleApplyFilter = (newFilteredEmployments: Document<Employment>[]): void => {
        setFilteredEmployments(newFilteredEmployments);
    };

    const handleClearFilter = (): void => {
        setFilteredEmployments(employments);
    };

    // Success state
    return (
        <>
            <QueryFilter
                config={config}
                collection={employments}
                onApplyFilter={handleApplyFilter}
                onClearFilter={handleClearFilter}
            />
            <Grid container direction="row">
                {filteredEmployments.map((employment, index) => (
                    <EmploymentCard employment={employment} key={index} />
                ))}
            </Grid>
        </>
    );
};

export default EmploymentCardGrid;
