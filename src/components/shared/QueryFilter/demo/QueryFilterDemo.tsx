import { Card, Typography } from '@material-ui/core';
import { QueryFilter } from 'components/shared/QueryFilter';
import React, { useState } from 'react';
import { QueryFilterDemoData } from 'types/storybook';

import config from './QueryFilterDemo.qbconfig';
import queryFilterDemoStyles from './QueryFilterDemo.styles';

interface QueryFilterDemoProps {
    data: QueryFilterDemoData[];
}

const QueryFilterDemo: React.FC<QueryFilterDemoProps> = ({ data }: QueryFilterDemoProps) => {
    const classes = queryFilterDemoStyles();
    const [filteredData, setFilteredData] = useState(data);
    const handleApplyFilter = (newData: QueryFilterDemoData[]): void => {
        setFilteredData(newData);
    };
    const handleClearFilter = (): void => {
        setFilteredData(data);
    };
    return (
        <div>
            <QueryFilter
                config={config}
                collection={data}
                onApplyFilter={handleApplyFilter}
                onClearFilter={handleClearFilter}
            />
            {filteredData.map(({ name, height, birthday }, index) => (
                <Card className={classes.datumCard} key={index}>
                    <Typography>
                        <b>Name: </b>
                        {name}
                    </Typography>
                    <Typography>
                        <b>Height: </b>
                        {height} cm
                    </Typography>
                    <Typography>
                        <b>Birthday: </b>
                        {birthday.toLocaleDateString()}
                    </Typography>
                </Card>
            ))}
        </div>
    );
};

export { QueryFilterDemo };
export type { QueryFilterDemoProps };
