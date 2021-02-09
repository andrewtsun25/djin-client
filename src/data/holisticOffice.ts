import { ArchitectureCategory } from 'types/holisticOffice/ArchitectureCategory';

const ArchitecturalCategories: ArchitectureCategory[] = [
    {
        title: 'Client Module',
        mappings: [
            {
                key: 'Language',
                value: 'TypeScript',
            },
            {
                key: 'Stylesheets',
                value: 'SASS',
            },
            {
                key: 'Frameworks',
                value: 'Angular, ng-fhir',
            },
            {
                key: 'Server',
                value: 'node.js',
            },
            {
                key: 'Deployment',
                value: 'AWS Elastic Beanstalk',
            },
        ],
    },
    {
        title: 'Server Module',
        mappings: [
            {
                key: 'Language',
                value: 'Java 8',
            },
            {
                key: 'Database',
                value: 'Postgres',
            },
            {
                key: 'Frameworks',
                value: 'Spring Boot, HAPI-FHIR',
            },
            {
                key: 'Server',
                value: 'Tomcat (embedded)',
            },
            {
                key: 'Deployment',
                value: 'AWS Elastic Beanstalk',
            },
        ],
    },
    {
        title: 'E2E Test Module',
        mappings: [
            {
                key: 'Language',
                value: 'JavaScript (ES6)',
            },
            {
                key: 'Framework',
                value: 'Cypress.io',
            },
            {
                key: 'Server',
                value: 'Tomcat (embedded)',
            },
        ],
    },
    {
        title: 'Serverless Compute Functions',
        mappings: [
            {
                key: 'Language',
                value: 'Python',
            },
            {
                key: 'Deployment',
                value: 'AWS Lambda',
            },
        ],
    },
    {
        title: 'Infrastructure',
        mappings: [
            {
                key: 'Version Control',
                value: 'GitHub',
            },
            {
                key: 'CI/CD',
                value: 'AWS CodePipeline w/ AWS CodeBuild',
            },
            {
                key: 'Authentication',
                value: 'Cognito',
            },
            {
                key: 'Security',
                value: 'AWS VPC',
            },
            {
                key: 'CDN',
                value: 'AWS CloudFront',
            },
            {
                key: 'DNS Routing',
                value: 'AWS Route 53',
            },
        ],
    },
];

export { ArchitecturalCategories };
