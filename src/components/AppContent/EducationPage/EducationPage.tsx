import React from "react";
import {EduType} from "types/education";
import useEducations from "hooks/useEducation";
import EducationCard from "./EducationCard";
import educationPageStyles from "./EducationPage.styles";
import {Typography} from "@material-ui/core";

interface EducationPageProps {
    eduType: EduType;
}

const EducationPage: React.FC<EducationPageProps> = ({eduType}: EducationPageProps) => {
    const classes = educationPageStyles();
    const educations = useEducations(eduType);
    return (
        <>
            <Typography variant="h3" className={classes.pageTitle}>{eduType} Education</Typography>
            {educations.map(education => <EducationCard education={education} />)}
        </>
    )
}

export default EducationPage;
