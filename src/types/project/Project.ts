import firebase from 'firebase';

type DocumentReference = firebase.firestore.DocumentReference;

export interface Project {
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
