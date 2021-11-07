import { DocumentReference } from 'types/firebase/firestore';

import EduType from './EduType';
import { StudentOrganization } from './StudentOrganization';

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
