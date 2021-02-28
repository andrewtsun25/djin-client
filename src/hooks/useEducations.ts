import { Educations } from 'data/education';
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { Education, EduType } from 'types/education';

export default function useEducations(eduType: EduType): Education[] {
    const [educations, setEducations] = useState<Education[]>([]);
    useEffect(() => {
        setEducations(
            orderBy(
                Educations.filter((edu) => edu.type === eduType),
                ['endDate'],
                ['desc'],
            ),
        );
    }, [eduType]);
    return educations;
}
