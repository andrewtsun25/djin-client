import { Document, useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { Employment } from 'types/employment';
import { isNotNil } from 'utils/general';

type useEmploymentsResponse = { employments: Nilable<Document<Employment>[]>; error: Error };

export default function useEmployments(): useEmploymentsResponse {
    const { data, error } = useCollection<Employment>(Collections.Employment.Companies, {
        parseDates: ['startDate', 'endDate'],
        orderBy: ['startDate', 'desc'],
    });
    const employments = isNotNil(data) ? data.filter((employment) => employment.exists) : data;
    return { employments, error: error as Error };
}
