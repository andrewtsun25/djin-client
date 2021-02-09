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
        'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c8f8eb3931774e0a50e1/1555679481664/FED_ASBUILT_S19b_T04_V5.0.pdf',
    'Life Cycle Plan':
        'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c914eb3931774e0a516f/1555679509721/LCP_ASBUILT_S19b_T04_V5.1.pdf',
    'Operational Concept Description':
        'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c9338165f50780f1188b/1555679540359/OCD_ASBUILT_S19b_T04_V4.1.pdf',
    'Release Description':
        'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cbae9478165f5949eb6589d/1555753287742/RD_ASBUILT_S19b_T04_V1.0.pdf',
    'System & Software Support Plan':
        'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c98ff9619a605343016b/1555679632749/SP_ASBUILT_S19b_T04_V1.1.pdf',
    'System Software Architecture Description':
        'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9cc0f53450a2f3fb21eb8/1555680274881/SSAD_ASBUILT_S19b_T04_V5.1.pdf',
    'Transition Plan':
        'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cbae970f9619a021d1d99e2/1555753332197/TP_ASBUILT_S19b_T04_V2.1.pdf',
    'Test Plan & Cases':
        'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c9ce0d92971994a8a8a7/1555679694962/TPC_ASBUILT_S19b_T04_V3.0.pdf',
};

const DownloadLinks: Record<string, string> = {
    'Client Module (Angular in TypeScript)': 'https://www.djtaeyong.com/s/holistic-office-client-development.zip',
    'Server Module (HAPI-FHIR on Java)': 'https://www.djtaeyong.com/s/holistic-office-server-development.zip',
    'E2E Module (Cypress.io in JavaScript)': 'https://www.djtaeyong.com/s/holistic-office-e2e-dev.zip',
    'Confluence Wiki Export': 'https://www.djtaeyong.com/s/Holistic-Office-Wiki-Export.zip',
};

export { ArchitecturalCategories, DocumentationLinks, DownloadLinks };
