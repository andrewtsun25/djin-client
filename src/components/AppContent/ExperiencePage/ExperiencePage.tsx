import { Grid, Link, Typography } from '@material-ui/core';
import useExperience from 'hooks/useExperience';
import React from 'react';

import ExperienceCard from './ExperienceCard';
import experiencePageStyles from './ExperiencePage.styles';

const RESUME_URL = 'https://docs.google.com/document/d/1fIQ8ceaV1BW7FmWvPe8aGGlLVFtXxLcHDIOf7swxXzw/edit?usp=sharing';

const ExperiencePage: React.FC = () => {
    const classes = experiencePageStyles();
    const experiences = useExperience();
    return (
        <>
            <Typography variant="h2" align="center">
                Coding Experience
            </Typography>
            <Typography paragraph align="center" className={classes.resumeInfo}>
                A more official, detailed résumé can be obtained{' '}
                <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                    here
                </Link>
                .
            </Typography>
            <Grid container direction="row">
                {experiences.map((experience, index) => (
                    <ExperienceCard experience={experience} key={index} />
                ))}
            </Grid>
        </>
    );
};

export default ExperiencePage;
