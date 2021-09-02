import { DocumentReference } from 'types/firebase/firestore';

import JobType from './JobType';

export interface EmploymentResponse {
    organization: DocumentReference;
    mediaUrl: string;
    role: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    responsibilities: string[];
    skills: string[];
    skillTypes: string[];
    domains: string[];
    jobType: JobType;
}
