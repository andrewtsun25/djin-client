import { Container, Typography } from '@material-ui/core';
import Background from 'components/shared/Background';
import useEducationBackgroundImage from 'hooks/useEducationBackgroundImage';
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
    const educationBg: string = useEducationBackgroundImage(eduType);
    const educations: Education[] = useEducations(eduType);
    return (
        <Background imageUrl={educationBg} tint>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" className={classes.pageTitle}>
                    {eduType} Education
                </Typography>
                {educations.map((education, index) => (
                    <EducationCard education={education} key={index} />
                ))}
            </Container>
        </Background>
    );
};

export default EducationPage;
