import {PBLA, UCSD, USC, Yonsei} from "../semester";
import {Education, EduType} from "types/education";

const pblaEdu: Education = {
    type: EduType.MUSIC,
    name: "Point Blank Los Angeles (PBLA)",
    startDate: PBLA.Fall2019.date,
    endDate: PBLA.Graduation.date,
    major: "DJ/Production Certificate",
    gpa: 4.0,
    description: "As an undergraduate student from Eleanor Roosevelt College, like most other college students, I had no idea what I wanted to do in college. Choosing between being a biologist and being a computer scientist proved to be quite difficult. So, I chose both and studied bioinformatics.",
    syllabusLink: "https://cse.ucsd.edu/undergraduate/bs-computer-science-bioinformatics",
    studentOrgs: [],
    courses: []
};

const ucsdEdu: Education = {
    type: EduType.CODING,
    name: "University of California, San Diego (UCSD)",
    startDate: UCSD.Fall2012.date,
    endDate: UCSD.Graduation.date,
    major: "B.S. Computer Science with specialization in Bioinformatics",
    gpa: 3.700,
    description: "As an undergraduate student from Eleanor Roosevelt College, like most other college students, I had no idea what I wanted to do in college. Choosing between being a biologist and being a computer scientist proved to be quite difficult. So, I chose both and studied bioinformatics.",
    department: "Jacobs School of Engineering",
    residentialCollege: "Eleanor Roosevelt College",
    syllabusLink: "https://cse.ucsd.edu/undergraduate/bs-computer-science-bioinformatics",
    studentOrgs: [],
    courses: []
};

const yonseiEdu: Education = {
    type: EduType.CODING,
    name: "Yonsei University (연세대학)",
    startDate: Yonsei.YISS.date,
    endDate: Yonsei.Graduation.date,
    major: "Exchange Student",
    gpa: 4.000,
    description: "After graduating from UCSD, I realized I was not quite ready to move on into the real world. Instead, I decided to attend one of Korea’s SKY universities. SKY refers to the 3 most prestigious universities in Korea: Seoul National University, Korea University, and Yonsei University.",
    syllabusLink: "https://summer.yonsei.ac.kr/home/",
    studentOrgs: [],
    courses: []
};

const uscEdu: Education = {
    type: EduType.CODING,
    name: "University of Southern California (USC)",
    startDate: USC.Fall2018.date,
    endDate: USC.Graduation.date,
    major: "M.S. Computer Science (Software Engineering Track)",
    gpa: 3.700,
    description: "As an undergraduate student from Eleanor Roosevelt College, like most other college students, I had no idea what I wanted to do in college. Choosing between being a biologist and being a computer scientist proved to be quite difficult. So, I chose both and studied bioinformatics.",
    department: "Jacobs School of Engineering",
    residentialCollege: "Eleanor Roosevelt College",
    syllabusLink: "https://cse.ucsd.edu/undergraduate/bs-computer-science-bioinformatics",
    studentOrgs: [],
    courses: []
};

const CodingEducation: Education[] = [ucsdEdu, yonseiEdu, uscEdu];
const MusicEducation: Education[] = [pblaEdu];

export { CodingEducation, MusicEducation };
