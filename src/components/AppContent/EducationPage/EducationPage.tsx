import { Typography } from '@material-ui/core';
import useEducations from 'hooks/useEducations';
import React from 'react';
import { Education, EduType } from 'types/education';

import EducationCard from './EducationCard';
import educationPageStyles from './EducationPage.styles';

interface EducationPageProps {
    eduType: EduType;
}

const EducationPage: React.FC<EducationPageProps> = ({ eduType }: EducationPageProps) => {
    const classes = educationPageStyles();
    const educations: Education[] = useEducations(eduType);
    return (
        <>
            <Typography variant="h2" align="center" className={classes.pageTitle}>
                {eduType} Education
            </Typography>
            {educations.map((education, index) => (
                <EducationCard education={education} key={index} />
            ))}
        </>
    );
};

export default EducationPage;
