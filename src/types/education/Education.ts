import firebase from 'firebase';

import EduType from './EduType';
import { StudentOrganization } from './StudentOrganization';

type DocumentReference = firebase.firestore.DocumentReference;

export interface Education {
    organization: DocumentReference;
    type: EduType;
    startDate: Date;
    endDate?: Date;
    major: string;
    minors?: string[];
    department?: string;
    residentialCollege?: string;
    gpa: number;
    description: string;
    syllabusUrls?: Record<string, string>;
    studentOrganizations?: StudentOrganization[];
}
