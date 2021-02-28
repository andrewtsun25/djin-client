import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { HBVResearchPaper } from 'types/hbvResearch';

type useHbvResearchPapersResponse = {
    hbvResearchPapers: Nilable<HBVResearchPaper[]>;
    error: Error;
};

export default function useHbvResearchPapers(): useHbvResearchPapersResponse {
    const { data: hbvResearchPapers, error } = useCollection<HBVResearchPaper>(Collections.HbvResearch.Papers, {
        parseDates: ['startDate', 'endDate'],
    });
    return { hbvResearchPapers, error: error as Error };
}
