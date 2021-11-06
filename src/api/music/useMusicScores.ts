import { useCollection } from 'api/firestore';
import Collections from 'const/collections';
import { orderBy } from 'firebase/firestore';
import { Nilable } from 'types/alias';
import { MusicScore } from 'types/music';

type useMusicScoresResponse = {
    scores: Nilable<MusicScore[]>;
    error: Nilable<Error>;
};

export default function useMusicScores(): useMusicScoresResponse {
    const { data: scores, error } = useCollection<MusicScore>(Collections.Music.Scores, {
        query: [orderBy('date', 'desc')],
    });
    return { scores, error: error as Error };
}
