import { useEducations } from 'api/education';
import { LoadingView } from 'components/shared';
import ErrorView from 'components/shared/ErrorView';
import EduTypeInfos from 'const/eduTypeInfos';
import { isNil } from 'lodash';
import React, { useMemo } from 'react';
import { EduType, EduTypeInfo } from 'types/education';
import { isNotNil } from 'utils/general';

import EducationCard from './EducationCard';

interface EducationPageContentProps {
    eduType: EduType;
}

const EducationPageContent: React.FC<EducationPageContentProps> = ({ eduType }: EducationPageContentProps) => {
    const eduTypeInfo: EduTypeInfo | undefined = useMemo(() => EduTypeInfos.get(eduType), [eduType]);
    const { educations, error } = useEducations(eduType);

    if (isNotNil(error)) {
        return <ErrorView error={error} message={`${eduTypeInfo?.name} education info unavailable.`} />;
    }

    if (isNil(educations)) {
        return <LoadingView message={`Loading ${eduTypeInfo?.name} education info...`} />;
    }

    return (
        <>
            {educations.map((education, index) => (
                <EducationCard education={education} key={index} />
            ))}
        </>
    );
};

export default EducationPageContent;
