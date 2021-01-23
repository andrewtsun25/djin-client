import React from "react";
import {Education} from "types/education";

interface EducationCardProps {
    education: Education
}

const EducationCard: React.FC<EducationCardProps> = ({ education }: EducationCardProps) => {
    return <p>{JSON.stringify(education, null, 4)}</p>;
}

export default EducationCard;
