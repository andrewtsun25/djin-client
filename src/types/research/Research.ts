import { DateTime } from 'luxon';

export interface Research {
    name: string;
    organization: string;
    avatarUrl: string;
    mediaUrl: string;
    startDate: DateTime;
    endDate: DateTime;
    paperLink: string;
    description: string;
    responsibilities: string[];
    skills: string[];
}
