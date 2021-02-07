import { HepBResearches } from 'data/research';
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { Research } from 'types/research';

export default function useResearches(): Research[] {
    const [researches, setResearches] = useState<Research[]>([]);
    useEffect(() => {
        setResearches(orderBy(HepBResearches, 'startDate', 'asc'));
    }, []);
    return researches;
}
