import React from "react";
import useExperience from "hooks/useExperience";
import {Grid, Typography} from "@material-ui/core";
import ExperienceCard from "./ExperienceCard";
import experiencePageStyles from "./ExperiencePage.styles";

const RESUME_URL = "https://docs.google.com/document/d/1fIQ8ceaV1BW7FmWvPe8aGGlLVFtXxLcHDIOf7swxXzw/edit?usp=sharing";

const ExperiencePage: React.FC = () => {
    const classes = experiencePageStyles();
    const experiences = useExperience();
    return (
        <>
            <Typography variant="h2" align="center"> Coding Experience</Typography>
            <Typography paragraph align="center" className={classes.resumeInfo}>
                A more official, detailed résumé can be obtained <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">here</a>.
            </Typography>
            <Grid container direction="row">
                {experiences.map(experience => <ExperienceCard experience={experience} />)}
            </Grid>

        </>
    )
};

export default ExperiencePage;
