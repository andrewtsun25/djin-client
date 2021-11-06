import { useCollection } from 'api/firestore';
import Collections from 'const/collections';
import { where } from 'firebase/firestore';
import { Nilable } from 'types/alias';
import { HolisticOfficeLink, HolisticOfficeLinkType } from 'types/holisticOffice';

type useHolisticOfficeLinksResponse = {
    links: Nilable<HolisticOfficeLink[]>;
    error: Nilable<Error>;
};

export default function useHolisticOfficeLinks(linkType: HolisticOfficeLinkType): useHolisticOfficeLinksResponse {
    const { data: links, error } = useCollection<HolisticOfficeLink>(Collections.HolisticOffice.Links, {
        query: [where('type', '==', linkType)],
    });
    return { links, error };
}
