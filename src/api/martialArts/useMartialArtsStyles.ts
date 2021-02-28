import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { Nilable } from 'types/alias';
import { MartialArtsStyle, MartialArtsStyleType } from 'types/martialArts';

type useMartialArtsStylesResponse = {
    martialArts: Nilable<MartialArtsStyle[]>;
    error: Error;
};

export default function useMartialArtsStyles(styleType: MartialArtsStyleType): useMartialArtsStylesResponse {
    const { data: martialArts, error } = useCollection<MartialArtsStyle>(Collections.MartialArts.Styles, {
        where: ['type', '==', styleType],
    });
    return { martialArts, error: error as Error };
}
