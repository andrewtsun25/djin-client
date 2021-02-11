import { InternationalTaekwondoFederation, WorldTaekwondo } from 'data/martialArts';
import { useEffect, useState } from 'react';
import { MartialArt, MartialArtsStyle } from 'types/martialArts';

export default function useMartialArt(style: MartialArtsStyle): MartialArt | undefined {
    const [pageData, setPageData] = useState<MartialArt>();
    useEffect(() => {
        switch (style) {
            case MartialArtsStyle.WT:
                setPageData(WorldTaekwondo);
                break;
            case MartialArtsStyle.ITF:
                setPageData(InternationalTaekwondoFederation);
                break;
            default:
                break;
        }
    }, [style]);

    return pageData;
}
