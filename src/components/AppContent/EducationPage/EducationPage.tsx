import { Container, Typography } from '@material-ui/core';
import { Background } from 'components/shared';
import EduTypeInfos from 'const/eduTypeInfos';
import React, { useMemo } from 'react';
import { EduType, EduTypeInfo } from 'types/education';

import educationPageStyles from './EducationPage.styles';
import EducationPageContent from './EducationPageContent';

interface EducationPageProps {
    eduType: EduType;
}

const EducationPage: React.FC<EducationPageProps> = ({ eduType }: EducationPageProps) => {
    const classes = educationPageStyles();
    const eduTypeInfo: EduTypeInfo | undefined = useMemo(() => EduTypeInfos.get(eduType), [eduType]);
    return (
        <Background imageUrl={eduTypeInfo?.backgroundUrl} tint>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" className={classes.pageTitle}>
                    {eduTypeInfo?.name} Education
                </Typography>
                <EducationPageContent eduType={eduType} />
            </Container>
        </Background>
    );
};

export default EducationPage;
