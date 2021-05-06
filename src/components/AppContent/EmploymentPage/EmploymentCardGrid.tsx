import { Grid } from '@material-ui/core';
import { useEmployments } from 'api/employment';
import { ErrorView, LoadingView } from 'components/shared';
import { QueryFilter } from 'components/shared/QueryFilter';
import { RulesLogic } from 'json-logic-js';
import { isNil } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Employment } from 'types/employment';
import { JsonLogicTreeParam } from 'types/queryParams';
import { useQueryParam } from 'use-query-params';
import { isNotNil } from 'utils/general';
import { filterCollectionWithLogicTree } from 'utils/jsonLogicUtils';

import EmploymentCard from './EmploymentCard';
import config from './EmploymentPage.qbconfig';

const EmploymentCardGrid: React.FC = () => {
    const [filter] = useQueryParam('filter', JsonLogicTreeParam);
    const { employments, error } = useEmployments();
    const [filteredEmployments, setFilteredEmployments] = useState<Employment[]>([]);
    const [initialized, setInitialized] = useState(false);

    // Initialize filtered employments to true once loaded
    useEffect(() => {
        if (isNotNil(employments) && !initialized) {
            setFilteredEmployments(
                isNotNil(filter) ? filterCollectionWithLogicTree(employments, filter as RulesLogic) : employments,
            );
            setInitialized(true);
        }
    }, [initialized, employments, filter]);

    // Error state
    if (isNotNil(error)) {
        return <ErrorView error={error} message="Employment information unavailable." />;
    }

    // Loading state
    if (isNil(employments)) {
        return <LoadingView message="Loading employment information..." />;
    }

    const handleApplyFilter = (newFilteredEmployments: Employment[]): void => {
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
