import { useState, useEffect } from "react";
import {Education, EduType} from "types/education";
import {CodingEducation, MusicEducation} from "const/data/education";
import { orderBy } from "lodash";

export default function useEducations(category: string): Education[] {
    const [educations, setEducations] = useState<Education[]>([]);
    useEffect(() => {
        switch(category) {
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
