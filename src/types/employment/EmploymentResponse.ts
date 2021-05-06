import firebase from 'firebase';

import JobType from './JobType';

type DocumentReference = firebase.firestore.DocumentReference;

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
