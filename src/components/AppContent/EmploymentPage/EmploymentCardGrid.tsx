import { Button, Grid } from '@material-ui/core';
import { Clear, Input } from '@material-ui/icons';
import { Document } from '@nandorojo/swr-firestore';
import { useEmployments } from 'api/employment';
import { ErrorView, LoadingView } from 'components/shared';
import { isNil } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Builder, BuilderProps, Query } from 'react-awesome-query-builder';
import { Employment } from 'types/employment';
import { isNotNil } from 'utils/general';
import jsonLogic from 'utils/jsonLogic';
import { createDefaultTreeForConfig, exportTree } from 'utils/qb';

import EmploymentCard from './EmploymentCard';
import employmentCardGridStyles from './EmploymentCardGrid.styles';
import config from './EmploymentPage.qbconfig';

const defaultTree = createDefaultTreeForConfig(config);

const renderBuilder = (props: BuilderProps): JSX.Element => (
    <div className="query-builder-container" style={{ padding: '10px' }}>
        <div className="query-builder qb-lite">
            <Builder {...props} />
        </div>
    </div>
);

const EmploymentCardGrid: React.FC = () => {
    const classes = employmentCardGridStyles();
    const { employments, error } = useEmployments();
    const [tree, setTree] = useState(defaultTree);
    const [filteredEmployments, setFilteredEmployments] = useState<Document<Employment>[]>([]);
    const [initialized, setInitialized] = useState(false);

    // Initialize filtered employments to true once loaded
    useEffect(() => {
        if (isNotNil(employments) && !initialized) {
            setFilteredEmployments(employments);
            setInitialized(true);
        }
    }, [initialized, employments]);

    const applyFilter = (): void => {
        if (isNil(employments) || tree === defaultTree) {
            return;
        }
        const logicTree = exportTree(tree, config);
        const newFilteredEmployments = employments.filter((employment) => jsonLogic.apply(logicTree, employment));
        setFilteredEmployments(newFilteredEmployments);
    };

    const clearFilter = (): void => {
        if (isNil(employments)) {
            return;
        }
        setTree(defaultTree);
        setFilteredEmployments(employments);
    };

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
            <div className={classes.filterButtonsRow}>
                <Button variant="contained" className={classes.filterButton} onClick={applyFilter} endIcon={<Input />}>
                    Apply Filter
                </Button>
                <Button variant="contained" className={classes.filterButton} onClick={clearFilter} endIcon={<Clear />}>
                    Clear
                </Button>
            </div>
            <Grid container direction="row">
                {filteredEmployments.map((employment, index) => (
                    <EmploymentCard employment={employment} key={index} />
                ))}
            </Grid>
        </>
    );
};

export default EmploymentCardGrid;
