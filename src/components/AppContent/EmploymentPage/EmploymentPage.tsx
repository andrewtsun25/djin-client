import { Link, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Background from 'components/shared/Background';
import { Urls } from 'const/urls';
import React from 'react';

import EmploymentCardGrid from './EmploymentCardGrid';
import employmentPageStyles from './EmploymentPage.styles';

const employmentsBg = `${Urls.AssetRoot}/employment/bg/anduril_22m_bg.jpeg`;
const RESUME_URL = 'https://docs.google.com/document/d/1fIQ8ceaV1BW7FmWvPe8aGGlLVFtXxLcHDIOf7swxXzw/edit?usp=sharing';

const EmploymentPage: React.FC = () => {
    const classes = employmentPageStyles();
    return (
        <Background imageUrl={employmentsBg} tint>
            <Typography variant="h2" align="center" className={clsx(classes.pageTitle, classes.contrastText)}>
                Coding Employment
            </Typography>
            <Typography paragraph align="center" className={clsx(classes.resumeInfo, classes.contrastText)}>
                A more official, detailed résumé can be obtained{' '}
                <Link
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(classes.contrastText, classes.resumeLink)}
                >
                    here
                </Link>
                .
            </Typography>
            <EmploymentCardGrid />
        </Background>
    );
};

export default EmploymentPage;
