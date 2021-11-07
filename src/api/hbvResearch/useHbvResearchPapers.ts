import { useCollection } from 'api/firestore';
import Collections from 'const/collections';
import { orderBy } from 'firebase/firestore';
import { Nilable } from 'types/alias';
import { HBVResearchPaper } from 'types/hbvResearch';

type useHbvResearchPapersResponse = {
    hbvResearchPapers: Nilable<HBVResearchPaper[]>;
    error: Nilable<Error>;
};

export default function useHbvResearchPapers(): useHbvResearchPapersResponse {
    const { data: hbvResearchPapers, error } = useCollection<HBVResearchPaper>(Collections.HbvResearch.Papers, {
        query: [orderBy('startDate', 'asc')],
        parseDates: ['startDate', 'endDate'],
    });
    return { hbvResearchPapers, error };
}
