import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { HolisticOfficeLink, HolisticOfficeLinkType } from 'types/holisticOffice';
import { isNotNil } from 'utils/general';

type useHolisticOfficeLinksResponse = {
    links: Nilable<HolisticOfficeLink[]>;
    error: Error;
};

export default function useHolisticOfficeLinks(linkType: HolisticOfficeLinkType): useHolisticOfficeLinksResponse {
    const { data, error } = useCollection<HolisticOfficeLink>(Collections.HolisticOffice.Links, {
        where: ['type', '==', linkType],
    });
    const links = isNotNil(data) ? data.filter((link) => link.exists) : data;
    return { links, error: error as Error };
}
