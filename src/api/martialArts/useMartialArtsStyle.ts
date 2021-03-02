import { useCollection } from '@nandorojo/swr-firestore';
import Collections from 'const/collections';
import { head } from 'lodash';
import { useMemo } from 'react';
import { Nilable } from 'types/alias';
import { MartialArtsStyle, MartialArtsStyleType } from 'types/martialArts';

type useMartialArtsStylesResponse = {
    martialArt: Nilable<MartialArtsStyle>;
    error: Error;
};

export default function useMartialArtsStyle(styleType: MartialArtsStyleType): useMartialArtsStylesResponse {
    const { data: martialArts, error } = useCollection<MartialArtsStyle>(Collections.MartialArts.Styles, {
        where: ['type', '==', styleType],
    });
    const martialArt = useMemo(() => {
        const martialArtDoc = head(martialArts);
        return martialArtDoc?.exists ? martialArtDoc : null;
    }, [martialArts]);
    return { martialArt, error: error as Error };
}
