import React from "react";
import useExperience from "hooks/useExperience";
import {Grid, Typography} from "@material-ui/core";
import experiencePageStyles from "./ExperiencePage.styles";
import ExperienceCard from "./ExperienceCard";

const ExperiencePage: React.FC = () => {
    const classes = experiencePageStyles();
    const experiences = useExperience();
    return (
        <>
            <Typography variant="h2" align="center"> Coding Experience</Typography>
            <Grid container direction="row">
                {experiences.map(experience => <ExperienceCard experience={experience} />)}
            </Grid>

        </>
    )
};

export default ExperiencePage;
