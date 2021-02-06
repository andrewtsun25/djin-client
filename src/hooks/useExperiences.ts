import { CodingExperience } from 'data/experience';
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { Experience } from 'types/experience';

export default function useExperiences(): Experience[] {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    useEffect(() => {
        setExperiences(orderBy(CodingExperience, 'startDate', 'desc'));
    }, []);
    return experiences;
}
