import { CodingExperience } from 'const/data/experience';
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { Experience } from 'types/experience';

import { CodingEducation } from '../const/data/education';

export default function useExperiences(): Experience[] {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    useEffect(() => {
        setExperiences(orderBy(CodingExperience, 'startDate', 'desc'));
    }, []);
    return experiences;
}
