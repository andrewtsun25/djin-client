import { Container, Fade, Grow, Link, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import Background from 'components/shared/Background';
import { Urls } from 'const/urls';
import React from 'react';
import { HolisticOfficeLinkType } from 'types/holisticOffice';

import holisticOfficePageStyles from './HolisticOfficePage.styles';
import LinkSection from './LinkSection';
import { ModulesGrid } from './ModulesGrid';

const logo = `${Urls.AssetRoot}/holisticOffice/logo/holistic_office_logo.png`;
const websiteImg = `${Urls.AssetRoot}/holisticOffice/img/holistic_office_website.png`;
const architectureImg = `${Urls.AssetRoot}/holisticOffice/img/holistic_office_architecture.png`;

const HOLISTIC_OFFICE_LINK = 'https://www.holisticoffice.biz/';
const HOLISTIC_OFFICE_GREEN = '#e2f1e9';

const HolisticOfficePage: React.FC = () => {
    const classes = holisticOfficePageStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Background tint={false} color={HOLISTIC_OFFICE_GREEN}>
            <Fade in>
                <Container maxWidth="lg" className={classes.pageContent}>
                    <a
                        href={HOLISTIC_OFFICE_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.holisticOfficeImgLink}
                    >
                        <img src={logo} alt="Holistic Office Logo" className={classes.holisticOfficeLinkImg} />
                    </a>
                    <Grow in>
                        <img
                            src={websiteImg}
                            alt="Holistic Office Website Image"
                            className={classes.holisticOfficeImg}
                        />
                    </Grow>
                    <Typography paragraph>
                        <Link
                            href={HOLISTIC_OFFICE_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.link}
                        >
                            Holistic Office
                        </Link>{' '}
                        is a patient EHR (Electronic Health Record) management and inventory management system for small
                        to mid-sized independent clinics, and also my graduate school project at USC (listed as
                        CSCI-577: Software Engineering), developed from August 2018 to May 2019. With a team of 8, my
                        main role in the project is the architect, designing everything from infrastructure to
                        frameworks used. We decided to have the site conform to FHIR (Fast Healthcare Interoperability
                        Resources) data handling standards. As with any health-related software, it needs to be HIPAA
                        (Health Information Portability and Accountability Act) compliant. Currently it is deployed as a
                        static file server (AWS S3) and a REST API server (AWS Elastic Beanstalk) that talks to a
                        relational database (AWS RDS).
                    </Typography>
                    <Typography variant={isSmall ? 'h3' : 'h2'} align="center" className={classes.pageHeading}>
                        Architecture
                    </Typography>
                    <Grow in>
                        <img
                            src={architectureImg}
                            alt="Holistic Office Architecture Diagram"
                            className={classes.holisticOfficeImg}
                        />
                    </Grow>
                    <ModulesGrid />
                    <LinkSection
                        title="Documentation"
                        description="The provided documentation cover various aspects of the project besides raw code."
                        linkType={HolisticOfficeLinkType.Documentation}
                        icon={<DescriptionIcon />}
                    />
                    <LinkSection
                        title="Source Code"
                        description="While the current version of the source code will no longer be open to the public, I am able to release
                the source code in .zip format at the point of time when this project is considered “completed” by USC.
                Our source code is divided into 3 modules as listed above. Each repository has a README on how to
                perform local deployment."
                        linkType={HolisticOfficeLinkType.Code}
                        icon={<FolderSpecialIcon />}
                    />
                </Container>
            </Fade>
        </Background>
    );
};

export default HolisticOfficePage;
