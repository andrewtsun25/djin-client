import { Config, Fields } from 'react-awesome-query-builder';
import MaterialConfig from 'react-awesome-query-builder/lib/config/material';
import JobType from 'types/employment/JobType';

const fields: Fields = {
    role: {
        type: 'text',
        label: 'Role',
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
    jobType: {
        type: 'select',
        label: 'Job Type',
        listValues: [
            { value: JobType.FullTime, title: 'Full-Time' },
            { value: JobType.Internship, title: 'Internship' },
        ],
    },
};

const config: Config = {
    ...(MaterialConfig as Config),
    fields,
};

export default config;
