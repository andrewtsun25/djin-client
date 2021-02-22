import { ClassicalMusicScores } from 'data/music/musicScores';
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { MusicScore } from 'types/music';

export default function useMusicScores(): MusicScore[] {
    const [musicScores, setMusicScores] = useState<MusicScore[]>([]);
    useEffect(() => {
        setMusicScores(orderBy(ClassicalMusicScores, 'startDate', 'asc'));
    }, []);
    return musicScores;
}
