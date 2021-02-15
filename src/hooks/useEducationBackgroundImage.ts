import pblaBg from 'assets/education/media/pbla_bg.jpg';
import uscBg from 'assets/education/media/usc_bg.jpg';
import { useEffect, useState } from 'react';
import { EduType } from 'types/education';

export default function useEducationBackgroundImage(category: EduType): string {
    const [educationBgImage, setEducationBgImage] = useState<string>('');
    useEffect(() => {
        switch (category) {
            case EduType.CODING:
                setEducationBgImage(uscBg);
                break;
            case EduType.MUSIC:
                setEducationBgImage(pblaBg);
                break;
            default:
                setEducationBgImage('');
        }
    }, [category]);
    return educationBgImage;
}
