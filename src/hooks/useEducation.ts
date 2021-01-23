import { useState, useEffect } from "react";
import {Education, EduType} from "types/education";
import {CodingEducation, MusicEducation} from "const/data/education";

export default function useEducations(category: string): Education[] {
    const [educations, setEducations] = useState<Education[]>([]);
    useEffect(() => {
        switch(category) {
            case EduType.CODING:
                setEducations(CodingEducation);
                break;
            case EduType.MUSIC:
                setEducations(MusicEducation);
                break;
            default:
                setEducations([]);
        }
    }, [category]);
    return educations;
}
