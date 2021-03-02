import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { Education, EduType } from 'types/education';

type useEducationsResponse = {
    educations: Nilable<Education[]>;
    error: Error;
};

export default function useEducations(eduType: EduType): useEducationsResponse {
    const { data: educations, error } = useCollection<Education>(Collections.Education.Colleges, {
        where: ['type', '==', eduType],
        parseDates: ['startDate', 'endDate'],
        orderBy: ['startDate', 'desc'],
    });
    return { educations, error: error as Error };
}
