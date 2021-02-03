import {DateTime} from "luxon";
import JobType from "./JobType";

export interface Experience {
    company: string,
    avatarUrl: string,
    mediaUrl: string,
    role: string,
    startDate: DateTime,
    endDate?: DateTime,
    description: string;
    responsibilities: string[];
    skills: string[];
    jobType: JobType;
}
