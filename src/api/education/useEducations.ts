import { Document, useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { Education, EduType } from 'types/education';
import { isNotNil } from 'utils/general';

type useEducationsResponse = {
    educations: Nilable<Document<Education>[]>;
    error: Error;
};

export default function useEducations(eduType: EduType): useEducationsResponse {
    const { data, error } = useCollection<Education>(Collections.Education.Colleges, {
        where: ['type', '==', eduType],
        parseDates: ['startDate', 'endDate'],
        orderBy: ['startDate', 'desc'],
    });
    const educations = isNotNil(data) ? data.filter((education) => education.exists) : data;
    return { educations, error: error as Error };
}
