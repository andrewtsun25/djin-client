import { HolisticOfficeLink, HolisticOfficeLinkType, HolisticOfficeModule } from 'types/holisticOffice';

const HolisticOfficeModules: HolisticOfficeModule[] = [
    {
        name: 'Client Module',
        components: {
            Language: 'TypeScript',
            Stylesheets: 'SASS',
            Frameworks: 'Angular, ng-fhir',
            Server: 'node.js',
            Deployment: 'AWS Elastic Beanstalk',
        },
    },
    {
        name: 'Server Module',
        components: {
            Language: 'Java 8',
            Database: 'Postgres',
            Frameworks: 'Spring Boot, HAPI-FHIR',
            Server: 'Tomcat (embedded)',
            Deployment: 'AWS Elastic Beanstalk',
        },
    },
    {
        name: 'E2E Test Module',
        components: {
            Language: 'JavaScript (ES6)',
            Framework: 'Cypress.io',
            Server: 'node.js',
            Deployment: 'AWS CodeBuild',
        },
    },
    {
        name: 'Serverless Compute Functions',
        components: {
            Language: 'Python',
            Deployment: 'AWS Lambda',
        },
    },
    {
        name: 'Infrastructure',
        components: {
            'Version Control': 'GitHub',
            'CI/CD': 'AWS CodePipeline w/ AWS CodeBuild',
            Authentication: 'AWS Cognito',
            Security: 'AWS VPC',
            CDN: 'AWS CloudFront',
            'DNS Routing': 'AWS Route 53',
        },
    },
];

const HolisticOfficeLinks: HolisticOfficeLink[] = [
    {
        name: 'Feasibility Evidence Description',
        type: HolisticOfficeLinkType.Documentation,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/FED_ASBUILT_S19b_T04_V5.0.pdf',
    },
    {
        name: 'Life Cycle Plan',
        type: HolisticOfficeLinkType.Documentation,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/LCP_ASBUILT_S19b_T04_V5.1.pdf',
    },
    {
        name: 'Operational Concept Description',
        type: HolisticOfficeLinkType.Documentation,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/OCD_ASBUILT_S19b_T04_V4.1.pdf',
    },
    {
        name: 'Release Description',
        type: HolisticOfficeLinkType.Documentation,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/RD_ASBUILT_S19b_T04_V1.0.pdf',
    },
    {
        name: 'System & Software Support Plan',
        type: HolisticOfficeLinkType.Documentation,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/SP_ASBUILT_S19b_T04_V1.1.pdf',
    },
    {
        name: 'System Software Architecture Description',
        type: HolisticOfficeLinkType.Documentation,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/SSAD_ASBUILT_S19b_T04_V5.1.pdf',
    },
    {
        name: 'Transition Plan',
        type: HolisticOfficeLinkType.Documentation,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/FED_ASBUILT_S19b_T04_V5.0.pdf',
    },
    {
        name: 'Test Plan & Cases',
        type: HolisticOfficeLinkType.Documentation,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/TPC_ASBUILT_S19b_T04_V3.0.pdf',
    },
    {
        name: 'Client Module (Angular in TypeScript)',
        type: HolisticOfficeLinkType.Code,
        url:
            'https://storage.googleapis.com/storage.djin.dev/holisticOffice/code/holistic-office-client-development.zip',
    },
    {
        name: 'Server Module (HAPI-FHIR on Java)',
        type: HolisticOfficeLinkType.Code,
        url:
            'https://storage.googleapis.com/storage.djin.dev/holisticOffice/code/holistic-office-server-development.zip',
    },
    {
        name: 'E2E Module (Cypress.io in JavaScript)',
        type: HolisticOfficeLinkType.Code,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/code/holistic-office-e2e-development.zip',
    },
    {
        name: 'Confluence Wiki Export',
        type: HolisticOfficeLinkType.Code,
        url: 'https://storage.googleapis.com/storage.djin.dev/holisticOffice/code/holistic-office-wiki-export.zip',
    },
];

export { HolisticOfficeLinks, HolisticOfficeModules };
