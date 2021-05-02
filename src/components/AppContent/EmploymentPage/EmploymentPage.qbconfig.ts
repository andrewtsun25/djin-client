import { BasicConfig, Config, Fields } from 'react-awesome-query-builder';
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
        label: 'Job Responsibilities',
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
        type: 'multiselect',
        label: 'Job Type',
        listValues: [
            { value: JobType.FullTime, title: 'Full-Time' },
            { value: JobType.Internship, title: 'Internship' },
        ],
    },
};

const config: Config = {
    ...BasicConfig,
    fields,
};

export default config;
