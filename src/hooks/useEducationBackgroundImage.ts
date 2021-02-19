import { useEffect, useState } from 'react';
import { EduType } from 'types/education';

const pblaBg = 'https://storage.googleapis.com/storage.djin.dev/education/bg/pbla_bg.jpg';
const uscBg = 'https://storage.googleapis.com/storage.djin.dev/education/bg/usc_bg.jpg';

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
