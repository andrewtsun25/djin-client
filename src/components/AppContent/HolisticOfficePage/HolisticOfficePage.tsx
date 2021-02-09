import { Container, Paper, Typography } from '@material-ui/core';
import architectureImg from 'assets/holisticOffice/holistic_office_architecture.png';
import websiteImg from 'assets/holisticOffice/holistic_office_website.png';
import React from 'react';

import holisticOfficePageStyles from './HolisticOfficePage.styles';

const HolisticOfficePage: React.FC = () => {
    const classes = holisticOfficePageStyles();
    return (
        <Container maxWidth="lg">
            <Typography variant="h2" align="center">
                Holistic Office
            </Typography>
            <div className={classes.holisticOfficeImgContainer}>
                <img src={websiteImg} alt="Holistic Office Website Image" className={classes.holisticOfficeImg} />
            </div>
            <Typography paragraph>
                Holistic Office is a patient EHR (Electronic Health Record) management and inventory management system
                for small to mid-sized independent clinics, and also my graduate school project at USC for CSCI-577:
                Software Engineering. With a team of 8, my main role in the project is the architect, designing
                everything from infrastructure to frameworks used. We decided to have the site conform to FHIR (Fast
                Healthcare Interoperability Resources) data handling standards. As with any health-related software, it
                needs to be HIPAA (Health Information Portability and Accountability Act) compliant. Currently it is
                deployed as a static file server (AWS S3) and a REST API server (AWS Elastic Beanstalk) that talks to a
                relational database (AWS RDS).
            </Typography>
            <Typography variant="h3" align="center">
                Architecture
            </Typography>
            <img
                src={architectureImg}
                alt="Holistic Office Architecture Diagram"
                className={classes.holisticOfficeImg}
            />
            <Paper className={classes.architecturePaper} elevation={5}>
                <Typography variant="h4">Client Module</Typography>
                <Typography>
                    <ul>
                        <li>
                            <b>Language:</b> TypeScript
                        </li>
                        <li>
                            <b>Styling:</b> Sass Stylesheets
                        </li>
                        <li>
                            <b>Frameworks:</b> Angular, ng-fhir
                        </li>
                        <li>
                            <b>Server:</b> node.js
                        </li>
                        <li>
                            <b>Deployment:</b> AWS S3 Storage + AWS CloudFront CDN
                        </li>
                    </ul>
                </Typography>
            </Paper>
            <Paper className={classes.architecturePaper} elevation={5}>
                <Typography variant="h4">Server Module</Typography>
                <Typography>
                    <ul>
                        <li>
                            <b>Language:</b> Java 8
                        </li>
                        <li>
                            <b>Frameworks:</b> Spring Boot, HAPI-FHIR
                        </li>
                        <li>
                            <b>Server:</b> Tomcat (embedded)
                        </li>
                        <li>
                            <b>Database:</b> Postgres
                        </li>
                        <li>
                            <b>Deployment:</b> AWS Elastic Beanstalk
                        </li>
                    </ul>
                </Typography>
            </Paper>
            <Paper className={classes.architecturePaper} elevation={5}>
                <Typography variant="h4">E2E Test Module</Typography>
                <Typography>
                    <ul>
                        <li>
                            <b>Language:</b> JavaScript (ES6)
                        </li>
                        <li>
                            <b>Framework</b> Cypress.io
                        </li>
                        <li>
                            <b>Server:</b> node.js
                        </li>
                    </ul>
                </Typography>
            </Paper>
            <Paper className={classes.architecturePaper} elevation={5}>
                <Typography variant="h4">Serverless Compute Functions</Typography>
                <Typography>
                    <ul>
                        <li>
                            <b>Language:</b> Python
                        </li>
                        <li>
                            <b>Deployment:</b> AWS Lambda
                        </li>
                    </ul>
                </Typography>
            </Paper>
            <Paper className={classes.architecturePaper} elevation={5}>
                <Typography variant="h4">Infrastructure</Typography>
                <Typography>
                    <ul>
                        <li>
                            <b>Version Control:</b> GitHub
                        </li>
                        <li>
                            <b>CI/CD:</b> AWS CodePipeline w/ AWS CodeBuild
                        </li>
                        <li>
                            <b>Authentication:</b> AWS Cognito
                        </li>
                        <li>
                            <b>Security:</b> AWS VPC
                        </li>
                        <li>
                            <b>CDN:</b> AWS CloudFront
                        </li>
                        <li>
                            <b>DNS Routing:</b> AWS Route 53
                        </li>
                    </ul>
                </Typography>
            </Paper>
            <Typography variant="h3" align="center">
                Documentation
            </Typography>
            <Typography paragraph>
                For a full history of documentation in various stages as well as supporting documents, please check out
                our team’s website on USC’s servers. However, I will provide the final 8 main documents that describes
                this project here.
            </Typography>
            <Typography>
                <ul>
                    <li>Feasibility Evidence Description</li>
                    <li>Life Cycle Plan</li>
                    <li>Operational Concept Description</li>
                    <li>Release Description</li>
                    <li>System and Software Support Plan</li>
                    <li>System Software Architecture Description</li>
                    <li>Transition Plan</li>
                    <li>Test Plan and Cases</li>
                </ul>
            </Typography>
            <Typography variant="h3" align="center">
                Source Code
            </Typography>
            <Typography paragraph>
                While the current version of the source code will no longer be open to the public, I am able to release
                the source code in .zip format at the point of time when this project is considered “completed” by USC.
                Our source code is divided into 3 modules as listed above. Each repository has a README on how to
                perform local deployment.
            </Typography>
            <Typography>
                <ul>
                    <li>Client Module (Angular in TypeScript)</li>
                    <li>Server Module (HAPI-FHIR on Java)</li>
                    <li>E2E Module (Cypress.io in JavaScript)</li>
                    <li>Confluence Wiki Export.</li>
                </ul>
            </Typography>
        </Container>
    );
};

export default HolisticOfficePage;
