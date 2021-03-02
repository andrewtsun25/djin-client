import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { MusicScore } from 'types/music';
import { isNotNil } from 'utils/general';

type useMusicScoresResponse = {
    scores: Nilable<MusicScore[]>;
    error: Error;
};

export default function useMusicScores(): useMusicScoresResponse {
    const { data, error } = useCollection<MusicScore>(Collections.Music.Scores, {
        orderBy: ['date', 'desc'],
    });
    const scores = isNotNil(data) ? data.filter((score) => score.exists) : data;
    return { scores, error: error as Error };
}
