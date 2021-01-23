import { useState, useEffect } from "react";
import { Education } from "types/education";
import {CodingEducation, MusicEducation} from "const/data/education";

export default function useEducations(category: string): Education[] {
    const [educations, setEducations] = useState<Education[]>([]);
    useEffect(() => {
        switch(category) {
            case "coding":
                setEducations(CodingEducation);
                break;
            case "music":
                setEducations(MusicEducation);
                break;
            default:
                setEducations([]);
        }
    }, [category]);
    return educations;
}
