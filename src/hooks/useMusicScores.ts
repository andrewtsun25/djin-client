import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';

import { ClassicalMusicScores } from '../data/musicScores';
import { MusicScore } from '../types/music';

export default function useMusicScores(): MusicScore[] {
    const [musicScores, setMusicScores] = useState<MusicScore[]>([]);
    useEffect(() => {
        setMusicScores(orderBy(ClassicalMusicScores, 'startDate', 'asc'));
    }, []);
    return musicScores;
}
