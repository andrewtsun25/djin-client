import { Grid, Link, Typography } from '@material-ui/core';
import clsx from 'clsx';
import sharedStyles from 'components/shared/shared.styles';
import useExperiences from 'hooks/useExperiences';
import React from 'react';
import { Experience } from 'types/experience';

import ExperienceCard from './ExperienceCard';
import experiencePageStyles from './ExperiencePage.styles';

const RESUME_URL = 'https://docs.google.com/document/d/1fIQ8ceaV1BW7FmWvPe8aGGlLVFtXxLcHDIOf7swxXzw/edit?usp=sharing';

const ExperiencePage: React.FC = () => {
    const classes = experiencePageStyles();
    const shared = sharedStyles();
    const experiences: Experience[] = useExperiences();
    return (
        <div className={clsx(shared.bg, classes.bg)}>
            <div className={classes.colorBg}>
                <Typography variant="h2" align="center" className={clsx(classes.pageTitle, classes.contrastText)}>
                    Coding Experience
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
                <Grid container direction="row">
                    {experiences.map((experience, index) => (
                        <ExperienceCard experience={experience} key={index} />
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default ExperiencePage;
