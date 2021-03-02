import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { StudentOrganization } from 'types/education';
import { isNotNil } from 'utils/general';

type useStudentOrganizationsResponse = {
    studentOrganizations: Nilable<StudentOrganization[]>;
    error: Error;
};

export default function useStudentOrganizations(educationId: string): useStudentOrganizationsResponse {
    const collectionId = `${Collections.Education.Colleges}/${educationId}/${Collections.Education.StudentOrganizations}`;
    const { data, error } = useCollection<StudentOrganization>(collectionId);
    const studentOrganizations = isNotNil(data)
        ? data.filter((studentOrganization) => studentOrganization.exists)
        : data;
    return { studentOrganizations, error: error as Error };
}
