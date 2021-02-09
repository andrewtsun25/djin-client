import { Container, Grid, Link, Typography } from '@material-ui/core';
import { FolderSpecial } from '@material-ui/icons';
import DescriptionIcon from '@material-ui/icons/Description';
import logo from 'assets/holisticOffice/logo/holisticOfficelogo.png';
import architectureImg from 'assets/holisticOffice/media/architecture.png';
import websiteImg from 'assets/holisticOffice/media/website.png';
import IconLink from 'components/shared/IconLink';
import { ArchitecturalCategories, DocumentationLinks, DownloadLinks } from 'data/holisticOffice';
import { map } from 'lodash';
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
            <Typography paragraph>
                Provided below is an account of all the decision making that went into creating this project.
            </Typography>
            <Typography>
                <ul className={classes.linkList}>
                    {map(DocumentationLinks, (value, key) => (
                        <IconLink href={value} text={key} icon={<DescriptionIcon />} />
                    ))}
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
                <ul className={classes.linkList}>
                    {map(DownloadLinks, (value, key) => (
                        <IconLink href={value} text={key} icon={<FolderSpecial />} />
                    ))}
                </ul>
            </Typography>
        </Container>
    );
};

export default HolisticOfficePage;
