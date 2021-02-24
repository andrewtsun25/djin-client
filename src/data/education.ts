import { Education, EduType } from 'types/education';

import { PBLA, UCSD, USC, Yonsei } from '../const/semester';

const pblaEdu: Education = {
    type: EduType.MUSIC,
    name: 'Point Blank Los Angeles (PBLA)',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/education/logo/pbla_logo.jpg',
    startDate: PBLA.Fall2019.date,
    endDate: PBLA.Graduation.date,
    major: 'DJ/Producer Certificate',
    gpa: 4.0,
    description:
        'While attending school at USC, I also wanted to pursue my musical passions. Hence, I concurrently took DJing and Music Production classes at Point Blank.',
    syllabusUrl: 'https://www.pointblankmusicschool.com/courses/la/dj-courses/dj-producer-certificate/',
    studentOrganizations: [],
    courses: [],
};

const ucsdEdu: Education = {
    type: EduType.CODING,
    name: 'University of California, San Diego (UCSD)',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/education/logo/ucsd_logo.png',
    startDate: UCSD.Fall2012.date,
    endDate: UCSD.Graduation.date,
    major: 'B.S. Computer Science with Specialization in Bioinformatics',
    gpa: 3.7,
    description:
        'As an undergraduate student from Eleanor Roosevelt College, like most other college students, I had no idea what I wanted to do in college. Choosing between being a biologist and being a computer scientist proved to be quite difficult. So, I chose both and studied bioinformatics.',
    department: 'Jacobs School of Engineering',
    residentialCollege: 'Eleanor Roosevelt College',
    residentialCollegeSyllabusLink: 'https://roosevelt.ucsd.edu/academics/gen-ed/index.html',
    syllabusUrl: 'https://cse.ucsd.edu/undergraduate/bs-computer-science-bioinformatics',
    studentOrganizations: [],
    courses: [],
};

const yonseiEdu: Education = {
    type: EduType.CODING,
    name: 'Yonsei University (연세대학교)',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/education/logo/yonsei_logo.png',
    startDate: Yonsei.YISS.date,
    endDate: Yonsei.Graduation.date,
    major: 'Exchange Student',
    gpa: 4.0,
    description:
        'After graduating from UCSD, I realized I was not quite ready to move on into the real world. Instead, I decided to attend one of Korea’s SKY universities. SKY refers to the 3 most prestigious universities in Korea: Seoul National University, Korea University, and Yonsei University.',
    syllabusUrl: 'https://summer.yonsei.ac.kr/home/',
    studentOrganizations: [],
    courses: [],
};

const uscEdu: Education = {
    type: EduType.CODING,
    name: 'University of Southern California (USC)',
    logoUrl: 'https://storage.googleapis.com/storage.djin.dev/education/logo/usc_logo.png',
    startDate: USC.Fall2018.date,
    endDate: USC.Graduation.date,
    major: 'M.S. Computer Science (Software Engineering Track)',
    gpa: 3.837,
    description:
        "I missed being able to code and cry in the Dungeon (computer lab where students code all night) at UCSD so I'm returning to college as a master's student to do it all over again. I chose USC... because I forgot to spell UCSD correctly on my list of universities to apply to.\n" +
        'During my time at USC, my most significant achievement was to create Holistic Office, a patient EHR (Electronic Health Record) and inventory management system written in Angular (TypeScript) and Spring Boot (Java). Development lasted a year in the core Software Engineering class. More information about Holistic Office is available in the Projects tab.',
    department: 'Viterbi School of Engineering',
    syllabusUrl: 'https://www.cs.usc.edu/academic-programs/masters/software-engineering/',
    studentOrganizations: [],
    courses: [],
};

const Educations = [ucsdEdu, yonseiEdu, uscEdu, pblaEdu];

export { Educations };
