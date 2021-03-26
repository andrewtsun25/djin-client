import { Typography } from '@material-ui/core';
import { useStudentOrganizations } from 'api/education';
import { ErrorView, LoadingView } from 'components/shared';
import { isNil } from 'lodash';
import React from 'react';
import { StudentOrganization } from 'types/education';
import { isNotNil } from 'utils/general';

interface CardInfoProps {
    educationId: string;
    educationName: string;
}

const BulletPoints: React.FC<CardInfoProps> = ({ educationId, educationName }: CardInfoProps) => {
    const { studentOrganizations, error } = useStudentOrganizations(educationId);

    if (isNotNil(error)) {
        return <ErrorView error={error} message="Student Organization info unavailable" />;
    }

    if (isNil(studentOrganizations)) {
        return <LoadingView message="Loading student organizations..." />;
    }

    return studentOrganizations.length > 0 ? (
        <>
            <Typography paragraph>
                During my time at {educationName}, I was involved in the following student organizations:
            </Typography>
            <ul>
                {studentOrganizations.map(({ name, description, biography }: StudentOrganization) => (
                    <li key={name}>
                        <Typography>
                            <b>{name}: </b>
                            <i>{description}</i> {biography}
                        </Typography>
                    </li>
                ))}
            </ul>
        </>
    ) : null;
};

export default BulletPoints;
