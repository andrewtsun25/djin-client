import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { MusicScore } from 'types/music';

type useMusicScoresResponse = {
    scores: Nilable<MusicScore[]>;
    error: Error;
};

export default function useMusicScores(): useMusicScoresResponse {
    const { data: scores, error } = useCollection<MusicScore>(Collections.Music.Scores, {
        orderBy: ['date', 'desc'],
    });
    return { scores, error: error as Error };
}
