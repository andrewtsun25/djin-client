import { DateTime } from 'luxon';

import JobType from './JobType';

export interface Employment {
    company: string;
    logoUrl: string;
    mediaUrl: string;
    role: string;
    startDate: DateTime;
    endDate?: DateTime;
    description: string;
    responsibilities: string[];
    skills: string[];
    jobType: JobType;
}
