import { Container, Grid, Link, Typography } from '@material-ui/core';
import logo from 'assets/holisticOffice/logo/holisticOfficelogo.png';
import architectureImg from 'assets/holisticOffice/media/architecture.png';
import websiteImg from 'assets/holisticOffice/media/website.png';
import DocumentLink from 'components/shared/DocumentLink';
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
                <a
                    href={HOLISTIC_OFFICE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.holisticOfficeImgLink}
                >
                    <img src={logo} alt="Holistic Office Logo" />
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
                <ul className={classes.linkList}>
                    <li>
                        <DocumentLink
                            href="https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c8f8eb3931774e0a50e1/1555679481664/FED_ASBUILT_S19b_T04_V5.0.pdf"
                            text="Feasibility Evidence Description"
                        />
                    </li>
                    <li>
                        <DocumentLink
                            href="https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c914eb3931774e0a516f/1555679509721/LCP_ASBUILT_S19b_T04_V5.1.pdf"
                            text="Life Cycle Plan"
                        />
                    </li>
                    <li>
                        <DocumentLink
                            href="https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c9338165f50780f1188b/1555679540359/OCD_ASBUILT_S19b_T04_V4.1.pdf"
                            text="Operational Concept Description"
                        />
                    </li>
                    <li>
                        <DocumentLink
                            href="https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cbae9478165f5949eb6589d/1555753287742/RD_ASBUILT_S19b_T04_V1.0.pdf"
                            text="Release Description"
                        />
                    </li>
                    <li>
                        <DocumentLink
                            href="https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c98ff9619a605343016b/1555679632749/SP_ASBUILT_S19b_T04_V1.1.pdf"
                            text="System & Software Support Plan"
                        />
                    </li>
                    <li>
                        <DocumentLink
                            href="https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9cc0f53450a2f3fb21eb8/1555680274881/SSAD_ASBUILT_S19b_T04_V5.1.pdf"
                            text="System Software Architecture Description"
                        />
                    </li>
                    <li>
                        <DocumentLink
                            href="https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cbae970f9619a021d1d99e2/1555753332197/TP_ASBUILT_S19b_T04_V2.1.pdf"
                            text="Transition Plan"
                        />
                    </li>
                    <li>
                        <DocumentLink
                            href="https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5cb9c9ce0d92971994a8a8a7/1555679694962/TPC_ASBUILT_S19b_T04_V3.0.pdf"
                            text="Test Plan & Cases"
                        />
                    </li>
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
