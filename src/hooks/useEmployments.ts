import { CodingExperience } from 'data/employment';
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { Employment } from 'types/employment';

export default function useEmployments(): Employment[] {
    const [experiences, setExperiences] = useState<Employment[]>([]);
    useEffect(() => {
        setExperiences(orderBy(CodingExperience, 'startDate', 'desc'));
    }, []);
    return experiences;
}
