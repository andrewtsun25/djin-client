import { Container, Typography } from '@material-ui/core';
import clsx from 'clsx';
import sharedStyles from 'components/shared/shared.styles';
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
    const sharedClasses = sharedStyles();
    const bgImage: string = useEducationBackgroundImage(eduType);
    const educations: Education[] = useEducations(eduType);
    return (
        <div className={sharedClasses.bg} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className={classes.colorBg}>
                <Container maxWidth="lg">
                    <Typography variant="h2" align="center" className={classes.pageTitle}>
                        {eduType} Education
                    </Typography>
                    {educations.map((education, index) => (
                        <EducationCard education={education} key={index} />
                    ))}
                </Container>
            </div>
        </div>
    );
};

export default EducationPage;
