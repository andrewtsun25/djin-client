import { DateTime } from 'luxon';

import { Course } from './Course';
import EduType from './EduType';
import { StudentOrganization } from './StudentOrganization';

export interface Education {
    type: EduType;
    name: string;
    startDate: DateTime;
    endDate: DateTime;
    major: string;
    department?: string;
    residentialCollege?: string;
    gpa: number;
    description: string;
    syllabusLink?: string;
    avatarUrl: string;
    studentOrgs?: StudentOrganization[];
    courses: Course[];
}
