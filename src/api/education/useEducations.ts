import { useCollection } from 'api/firestore';
import Collections from 'const/collections';
import { orderBy, where } from 'firebase/firestore';
import { Nilable } from 'types/alias';
import { FirestoreDocument } from 'types/api';
import { Education, EduType } from 'types/education';

type useEducationsResponse = {
    educations: Nilable<FirestoreDocument<Education>[]>;
    error: Nilable<Error>;
};

export default function useEducations(eduType: EduType): useEducationsResponse {
    const { data: educations, error } = useCollection<Education>(Collections.Education.Colleges, {
        query: [where('type', '==', eduType), orderBy('startDate', 'desc')],
        parseDates: ['startDate', 'endDate'],
    });
    return { educations, error };
}
