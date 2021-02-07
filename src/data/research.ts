import ucsdLogo from 'assets/education/logo/ucsd.png';
import costBenefitAnalysisImg from 'assets/research/media/cost_benefit_analysis.jpg';
import linkageToCareImg from 'assets/research/media/linkage_to_care.jpg';
import { Research } from 'types/research';

import { UCSD } from '../const/semester';

const CostBenefitAnalysis: Research = {
    name: 'Cost Estimation Of Hepatitis B Screenings Across Greater San Diego',
    organization: 'Asian Pacific Health Foundation, San Diego',
    avatarUrl: ucsdLogo,
    mediaUrl: costBenefitAnalysisImg,
    startDate: UCSD.Fall2014.date,
    endDate: UCSD.Winter2015.date,
    paperLink: 'https://docs.google.com/document/d/1313n4EcFPFcP_aTEkEqxIFHibTdbUJJGR_bZcWPTTm8/edit',
    description:
        'Performed a cost-benefit analysis that analyzes the benefits of providing Hepatitis B health screenings to Asian communities, and how to provide these screenings in a cost-effective way. Needless to say, it is indeed possible to provide screenings in a cost-effective manner.',
    responsibilities: [
        'Volunteered weekly at clinical screenings to collect patient and blood sample data with our target demographic of Asian Americans in San Diego County. Used these clinical sessions as a baseline for cost calculations.',
        'Wrote a research paper on cost estimation detailing expense calculations and ways to minimize expenses for screening providers.',
    ],
    skills: ['Lab Work', 'Google Docs'],
};

const LinkageToCare: Research = {
    name: 'Linkage-To-Care Results',
    organization: 'Asian Pacific Health Foundation, San Diego',
    avatarUrl: ucsdLogo,
    mediaUrl: linkageToCareImg,
    startDate: UCSD.Winter2015.date,
    endDate: UCSD.Spring2015.date,
    paperLink: 'https://docs.google.com/document/d/1O3l3UU_qePiJVxPDHzcR1hce_SqV2OZBPr8dETCM1sU/edit',
    description:
        'Investigated the successful linkage to medical care for Hepatitis B clinic patients screened by the Asian Pacific Health Foundation.',
    responsibilities: [
        'Volunteered weekly at clinical screenings to collect patient and blood sample data with our target demographic of Asian Americans in San Diego County. Used these clinical sessions as a baseline for cost calculations',
        'Created a Python Script for clinical doctors and volunteers to easily generate patient ID numbers.',
        'Created a Microsoft Access database from Excel data regarding patient demographics and hepatitis B test results. Database will continue to be used by Asian Pacific Health Foundation.',
        'Generated results from various SQL queries to analyze of the success of Hepatitis B patient linkage to medical care.',
        'Wrote a research paper on linkage-to-care statistical analysis, which was ultimately used to strengthen results of my previous cost-effective analysis of Hepatitis B clinicals.',
    ],
    skills: ['Lab Work', 'Python', 'Microsoft Access DB', 'SQL', 'Google Docs'],
};

const HepBResearches: Research[] = [CostBenefitAnalysis, LinkageToCare];

export { HepBResearches };
