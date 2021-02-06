import pblaLogo from 'assets/education/logo/pbla.jpg';
import ucsdLogo from 'assets/education/logo/ucsd.png';
import uscLogo from 'assets/education/logo/usc.png';
import yonseiLogo from 'assets/education/logo/yonsei.png';
import { Education, EduType } from 'types/education';

import { PBLA, UCSD, USC, Yonsei } from '../semester';

const pblaEdu: Education = {
    type: EduType.MUSIC,
    name: 'Point Blank Los Angeles (PBLA)',
    avatarUrl: pblaLogo,
    startDate: PBLA.Fall2019.date,
    endDate: PBLA.Graduation.date,
    major: 'DJ/Producer Certificate',
    gpa: 4.0,
    description:
        'While attending school at USC, I also wanted to pursue my musical passions. Hence, I concurrently took DJing and Music Production classes at Point Blank.',
    syllabusLink: 'https://www.pointblankmusicschool.com/courses/la/dj-courses/dj-producer-certificate/',
    studentOrgs: [],
    courses: [],
};

const ucsdEdu: Education = {
    type: EduType.CODING,
    name: 'University of California, San Diego (UCSD)',
    avatarUrl: ucsdLogo,
    startDate: UCSD.Fall2012.date,
    endDate: UCSD.Graduation.date,
    major: 'B.S. Computer Science with Specialization in Bioinformatics',
    gpa: 3.7,
    description:
        'As an undergraduate student from Eleanor Roosevelt College, like most other college students, I had no idea what I wanted to do in college. Choosing between being a biologist and being a computer scientist proved to be quite difficult. So, I chose both and studied bioinformatics.',
    department: 'Jacobs School of Engineering',
    residentialCollege: 'Eleanor Roosevelt College',
    residentialCollegeSyllabusLink: 'https://roosevelt.ucsd.edu/academics/gen-ed/index.html',
    syllabusLink: 'https://cse.ucsd.edu/undergraduate/bs-computer-science-bioinformatics',
    studentOrgs: [],
    courses: [],
};

const yonseiEdu: Education = {
    type: EduType.CODING,
    name: 'Yonsei University (연세대학교)',
    avatarUrl: yonseiLogo,
    startDate: Yonsei.YISS.date,
    endDate: Yonsei.Graduation.date,
    major: 'Exchange Student',
    gpa: 4.0,
    description:
        'After graduating from UCSD, I realized I was not quite ready to move on into the real world. Instead, I decided to attend one of Korea’s SKY universities. SKY refers to the 3 most prestigious universities in Korea: Seoul National University, Korea University, and Yonsei University.',
    syllabusLink: 'https://summer.yonsei.ac.kr/home/',
    studentOrgs: [],
    courses: [],
};

const uscEdu: Education = {
    type: EduType.CODING,
    name: 'University of Southern California (USC)',
    avatarUrl: uscLogo,
    startDate: USC.Fall2018.date,
    endDate: USC.Graduation.date,
    major: 'M.S. Computer Science (Software Engineering Track)',
    gpa: 3.7,
    description:
        "I missed being able to code and cry in the Dungeon (computer lab where students code all night) at UCSD so I'm returning to college as a master's student to do it all over again. I chose USC... because I forgot to spell UCSD correctly on my list of universities to apply to.\n" +
        'During my time at USC, my most significant achievement was to create Holistic Office, a patient EHR (Electronic Health Record) and inventory management system written in Angular (TypeScript) and Spring Boot (Java). Development lasted a year in the core Software Engineering class. More information about Holistic Office is available in the Projects tab.',
    department: 'Viterbi School of Engineering',
    syllabusLink: 'https://www.cs.usc.edu/academic-programs/masters/software-engineering/',
    studentOrgs: [],
    courses: [],
};

const CodingEducation: Education[] = [ucsdEdu, yonseiEdu, uscEdu];
const MusicEducation: Education[] = [pblaEdu];

export { CodingEducation, MusicEducation };
