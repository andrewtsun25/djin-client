import { Config, Fields } from 'react-awesome-query-builder';
import MaterialConfig from 'react-awesome-query-builder/lib/config/material';

const fields: Fields = {
    name: {
        type: 'text',
        label: 'Name',
    },
    startDate: {
        type: 'date',
        label: 'Start Date',
    },
    endDate: {
        type: 'date',
        label: 'End Date',
    },
    description: {
        type: 'text',
        label: 'Description',
    },
    responsibilities: {
        type: 'text',
        label: 'Description Bullet Point Text',
    },
    skills: {
        type: 'text',
        label: 'Skills',
    },
    domains: {
        type: 'text',
        label: 'Domains (e.g. Defense, Entertainment, etc.)',
    },
    skillTypes: {
        type: 'text',
        label: 'Skill Types',
    },
    organizationName: {
        type: 'text',
        label: 'Organization',
    },
};

const config: Config = {
    ...(MaterialConfig as Config),
    fields,
};

export default config;
