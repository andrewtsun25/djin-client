import { ArchitectureCategory } from 'types/holisticOffice/ArchitectureCategory';

const ArchitecturalCategories: ArchitectureCategory[] = [
    {
        title: 'Client Module',
        mappings: {
            Language: 'TypeScript',
            Stylesheets: 'SASS',
            Frameworks: 'Angular, ng-fhir',
            Server: 'node.js',
            Deployment: 'AWS Elastic Beanstalk',
        },
    },
    {
        title: 'Server Module',
        mappings: {
            Language: 'Java 8',
            Database: 'Postgres',
            Frameworks: 'Spring Boot, HAPI-FHIR',
            Server: 'Tomcat (embedded)',
            Deployment: 'AWS Elastic Beanstalk',
        },
    },
    {
        title: 'E2E Test Module',
        mappings: {
            Language: 'JavaScript (ES6)',
            Framework: 'Cypress.io',
            Server: 'node.js',
            Deployment: 'AWS CodeBuild',
        },
    },
    {
        title: 'Serverless Compute Functions',
        mappings: {
            Language: 'Python',
            Deployment: 'AWS Lambda',
        },
    },
    {
        title: 'Infrastructure',
        mappings: {
            'Version Control': 'GitHub',
            'CI/CD': 'AWS CodePipeline w/ AWS CodeBuild',
            Authentication: 'AWS Cognito',
            Security: 'AWS VPC',
            CDN: 'AWS CloudFront',
            'DNS Routing': 'AWS Route 53',
        },
    },
];

const DocumentationLinks: Record<string, string> = {
    'Feasibility Evidence Description':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/FED_ASBUILT_S19b_T04_V5.0.pdf',
    'Life Cycle Plan':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/LCP_ASBUILT_S19b_T04_V5.1.pdf',
    'Operational Concept Description':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/OCD_ASBUILT_S19b_T04_V4.1.pdf',
    'Release Description':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/RD_ASBUILT_S19b_T04_V1.0.pdf',
    'System & Software Support Plan':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/SP_ASBUILT_S19b_T04_V1.1.pdf',
    'System Software Architecture Description':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/SSAD_ASBUILT_S19b_T04_V5.1.pdf',
    'Transition Plan':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/TP_ASBUILT_S19b_T04_V2.1.pdf',
    'Test Plan & Cases':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/doc/TPC_ASBUILT_S19b_T04_V3.0.pdf',
};

const DownloadLinks: Record<string, string> = {
    'Client Module (Angular in TypeScript)':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/code/holistic-office-client-development.zip',
    'Server Module (HAPI-FHIR on Java)':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/code/holistic-office-server-development.zip',
    'E2E Module (Cypress.io in JavaScript)':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/code/holistic-office-e2e-development.zip',
    'Confluence Wiki Export':
        'https://storage.googleapis.com/storage.djin.dev/holisticOffice/code/holistic-office-wiki-export.zip',
};

export { ArchitecturalCategories, DocumentationLinks, DownloadLinks };
