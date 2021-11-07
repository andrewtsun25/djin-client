import { DocumentReference } from 'types/firebase/firestore';

export interface ProjectResponse {
    name: string;
    startDate: Date;
    endDate?: Date;
    mediaUrl: string;
    description: string;
    responsibilities: string[];
    organization: DocumentReference;
    skills: string[];
    disclaimer?: string;
    domains: string[];
    skillTypes: string[];
    projectUrls?: Record<string, string>;
}
