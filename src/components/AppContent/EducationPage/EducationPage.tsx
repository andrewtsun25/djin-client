import React from "react";
import {EduType} from "types/education";
import useEducations from "hooks/useEducation";
import EducationCard from "./EducationCard";

interface EducationPageProps {
    eduType: EduType;
}

const EducationPage: React.FC<EducationPageProps> = ({eduType}: EducationPageProps) => {
    const educations = useEducations(eduType);
    return (
        <>
            <h1>{eduType} Education</h1>
            {educations.map(education => <EducationCard education={education} />)}
        </>
    )
}

export default EducationPage;
