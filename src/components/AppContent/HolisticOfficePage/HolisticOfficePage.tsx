import { Container, Grid, Link, Paper, Typography } from '@material-ui/core';
import logo from 'assets/holisticOffice/logo/holisticOfficelogo.png';
import architectureImg from 'assets/holisticOffice/media/architecture.png';
import websiteImg from 'assets/holisticOffice/media/website.png';
import { ArchitecturalCategories } from 'data/holisticOffice';
import React from 'react';

import ArchitecturePaper from './ArchitecturePaper';
import holisticOfficePageStyles from './HolisticOfficePage.styles';

const HOLISTIC_OFFICE_LINK = 'https://www.holisticoffice.biz/';

const HolisticOfficePage: React.FC = () => {
    const classes = holisticOfficePageStyles();
    return (
        <Container maxWidth="lg">
            <div className={classes.holisticOfficeImgContainer}>
                <a href={HOLISTIC_OFFICE_LINK} target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="Holistic Office Logo" className={classes.holisticOfficeImg} />
                </a>
            </div>
            <div className={classes.holisticOfficeImgContainer}>
                <img src={websiteImg} alt="Holistic Office Website Image" className={classes.holisticOfficeImg} />
            </div>
            <Typography paragraph>
                <Link href={HOLISTIC_OFFICE_LINK} target="_blank" rel="noopener noreferrer">
                    Holistic Office
                </Link>{' '}
                is a patient EHR (Electronic Health Record) management and inventory management system for small to
                mid-sized independent clinics, and also my graduate school project at USC (listed as CSCI-577: Software
                Engineering), developed from August 2018 to May 2019. With a team of 8, my main role in the project is
                the architect, designing everything from infrastructure to frameworks used. We decided to have the site
                conform to FHIR (Fast Healthcare Interoperability Resources) data handling standards. As with any
                health-related software, it needs to be HIPAA (Health Information Portability and Accountability Act)
                compliant. Currently it is deployed as a static file server (AWS S3) and a REST API server (AWS Elastic
                Beanstalk) that talks to a relational database (AWS RDS).
            </Typography>
            <Typography variant="h2" align="center" className={classes.pageHeading}>
                Architecture
            </Typography>
            <img
                src={architectureImg}
                alt="Holistic Office Architecture Diagram"
                className={classes.holisticOfficeImg}
            />
            <Grid container spacing={3}>
                {ArchitecturalCategories.map((architecturalCategory) => (
                    <Grid item xs={12} sm={4} key={architecturalCategory.title}>
                        <ArchitecturePaper category={architecturalCategory} />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h2" align="center" className={classes.pageHeading}>
                Documentation
            </Typography>
            <Typography paragraph>Here are the 8 academic documents submitted to USC detailing the project.</Typography>
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
            <Typography variant="h2" align="center" className={classes.pageHeading}>
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
                    <li>Confluence Wiki Export</li>
                </ul>
            </Typography>
        </Container>
    );
};

export default HolisticOfficePage;
