import StudentOrganization from "./StudentOrganization";
import Course from "./Course";
import {DateTime} from "luxon";
import EduType from "./EduType";

export default interface Education {
    type: EduType
    name: string;
    startDate: DateTime;
    endDate: DateTime;
    major: string;
    department?: string;
    residentialCollege?: string;
    gpa: number
    description: string;
    syllabusLink?: string;
    studentOrgs?: StudentOrganization[];
    courses: Course[];
}


