import { CodingEducation, MusicEducation } from 'data/education';
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { Education, EduType } from 'types/education';

export default function useEducations(category: EduType): Education[] {
    const [educations, setEducations] = useState<Education[]>([]);
    useEffect(() => {
        switch (category) {
            case EduType.CODING:
                setEducations(orderBy(CodingEducation, ['endDate'], ['desc']));
                break;
            case EduType.MUSIC:
                setEducations(orderBy(MusicEducation, ['endDate'], ['desc']));
                break;
            default:
                setEducations([]);
        }
    }, [category]);
    return educations;
}
