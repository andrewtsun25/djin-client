import { DateTime } from 'luxon';

export interface Research {
    name: string;
    organization: string;
    logoUrl: string;
    mediaUrl: string;
    startDate: DateTime;
    endDate: DateTime;
    paperLink: string;
    description: string;
    responsibilities: string[];
    skills: string[];
}
