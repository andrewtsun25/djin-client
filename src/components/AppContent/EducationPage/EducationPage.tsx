import { Typography } from '@material-ui/core';
import useEducations from 'hooks/useEducations';
import React from 'react';
import { EduType } from 'types/education';

import EducationCard from './EducationCard';

interface EducationPageProps {
    eduType: EduType;
}

const EducationPage: React.FC<EducationPageProps> = ({ eduType }: EducationPageProps) => {
    const educations = useEducations(eduType);
    return (
        <>
            <Typography variant="h2" align="center">
                {eduType} Education
            </Typography>
            {educations.map((education, index) => (
                <EducationCard education={education} key={index} />
            ))}
        </>
    );
};

export default EducationPage;
