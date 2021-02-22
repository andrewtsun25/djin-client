import { DateTime } from 'luxon';

export interface Project {
    name: string;
    startDate: DateTime;
    endDate?: DateTime;
    mediaUrl: string;
    description: string;
    responsibilities: string[];
    organization: string;
    logoUrl: string;
    skills: string[];
    disclaimer?: string;
    projectLink?: string;
}
