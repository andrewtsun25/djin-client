import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { HolisticOfficeLink, HolisticOfficeLinkType } from 'types/holisticOffice';

type useHolisticOfficeLinksResponse = {
    links: Nilable<HolisticOfficeLink[]>;
    error: Error;
};

export default function useHolisticOfficeLinks(linkType: HolisticOfficeLinkType): useHolisticOfficeLinksResponse {
    const { data: links, error } = useCollection<HolisticOfficeLink>(Collections.HolisticOffice.Links, {
        where: ['type', '==', linkType],
    });
    return { links, error: error as Error };
}
