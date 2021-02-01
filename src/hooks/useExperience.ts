import {Experience} from "types/experience";
import {useEffect, useState} from "react";
import {CodingExperience} from "const/data/experience";

export default function useExperience() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    useEffect(() => {
        setExperiences(CodingExperience);
    }, []);
    return experiences;
}
