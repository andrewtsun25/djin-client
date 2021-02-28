import firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

export interface HBVResearchPaper {
    name: string;
    organization: DocumentReference;
    mediaUrl: string;
    startDate: Date;
    endDate: Date;
    paperLink: string;
    description: string;
    responsibilities: string[];
    skills: string[];
}
