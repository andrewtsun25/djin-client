import { useEffect, useState } from 'react';

import { HolisticOfficeLinks } from '../data/holisticOffice';
import { HolisticOfficeLink, HolisticOfficeLinkType } from '../types/holisticOffice';

export function useHolisticOfficeLinks(type: HolisticOfficeLinkType): HolisticOfficeLink[] {
    const [links, setLinks] = useState<HolisticOfficeLink[]>([]);
    useEffect(() => {
        setLinks(HolisticOfficeLinks.filter((link) => link.type === type));
    }, []);
    return links;
}
