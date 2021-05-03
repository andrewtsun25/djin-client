import { Button } from '@material-ui/core';
import { Clear, Input } from '@material-ui/icons';
import React, { useState } from 'react';
import { Builder, BuilderProps, Config, Query } from 'react-awesome-query-builder';
import jsonLogic from 'utils/jsonLogic';
import { createDefaultTreeForConfig, exportTree } from 'utils/qb';

import queryFilterStyles from './QueryFilter.styles';

interface QueryFilterProps<T> {
    config: Config;
    collection: T[];
    onApplyFilter(newCollection: T[]): void;
    onClearFilter(): void;
}

const renderBuilder = (props: BuilderProps): JSX.Element => (
    <div className="query-builder-container" style={{ padding: '10px' }}>
        <div className="query-builder qb-lite">
            <Builder {...props} />
        </div>
    </div>
);

function QueryFilter<T>({ config, collection, onApplyFilter, onClearFilter }: QueryFilterProps<T>): JSX.Element {
    const classes = queryFilterStyles();
    const defaultTree = createDefaultTreeForConfig(config);
    const [tree, setTree] = useState(defaultTree);
    const applyFilter = (): void => {
        if (tree === defaultTree) {
            return;
        }
        const logicTree = exportTree(tree, config);
        const filteredCollection = collection.filter((item) => jsonLogic.apply(logicTree, item));
        onApplyFilter(filteredCollection);
    };

    const clearFilter = (): void => {
        setTree(defaultTree);
        onClearFilter();
    };
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
        </>
    );
}

export { QueryFilter };
