import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { HBVResearchPaper } from 'types/hbvResearch';
import { isNotNil } from 'utils/general';

type useHbvResearchPapersResponse = {
    hbvResearchPapers: Nilable<HBVResearchPaper[]>;
    error: Error;
};

export default function useHbvResearchPapers(): useHbvResearchPapersResponse {
    const { data, error } = useCollection<HBVResearchPaper>(Collections.HbvResearch.Papers, {
        parseDates: ['startDate', 'endDate'],
        orderBy: ['startDate', 'asc'],
    });
    const hbvResearchPapers = isNotNil(data) ? data.filter((hbvResearchPaper) => hbvResearchPaper.exists) : data;
    return { hbvResearchPapers, error: error as Error };
}
