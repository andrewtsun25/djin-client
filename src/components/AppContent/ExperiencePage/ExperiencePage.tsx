import { Grid, Link, Typography } from '@material-ui/core';
import andurilBg from 'assets/experience/media/anduril_22m_bg.jpeg';
import clsx from 'clsx';
import Background from 'components/shared/Background';
import useExperiences from 'hooks/useExperiences';
import React from 'react';
import { Experience } from 'types/experience';

import ExperienceCard from './ExperienceCard';
import experiencePageStyles from './ExperiencePage.styles';

const RESUME_URL = 'https://docs.google.com/document/d/1fIQ8ceaV1BW7FmWvPe8aGGlLVFtXxLcHDIOf7swxXzw/edit?usp=sharing';

const ExperiencePage: React.FC = () => {
    const classes = experiencePageStyles();
    const experiences: Experience[] = useExperiences();
    return (
        <Background imageUrl={andurilBg} tint>
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
        </Background>
    );
};

export default ExperiencePage;
