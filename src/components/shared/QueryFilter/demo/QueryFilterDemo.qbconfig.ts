import { Config, Fields } from 'react-awesome-query-builder';
import MaterialConfig from 'react-awesome-query-builder/lib/config/material';

const fields: Fields = {
    name: {
        type: 'text',
        label: 'Name',
    },
    height: {
        type: 'number',
        label: 'Height (cm)',
    },
    startDate: {
        type: 'date',
        label: 'Birthday',
    },
};

const config: Config = {
    ...(MaterialConfig as Config),
    fields,
};

export default config;
