import { useCollection } from 'api/firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { StudentOrganization } from 'types/education';

type useStudentOrganizationsResponse = {
    studentOrganizations: Nilable<StudentOrganization[]>;
    error: Nilable<Error>;
};

export default function useStudentOrganizations(educationId: string): useStudentOrganizationsResponse {
    const collectionId = `${Collections.Education.Colleges}/${educationId}/${Collections.Education.StudentOrganizations}`;
    const { data: studentOrganizations, error } = useCollection<StudentOrganization>(collectionId);
    return { studentOrganizations, error };
}
