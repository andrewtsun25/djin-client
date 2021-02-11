import { HaidongGumdo, InternationalTaekwondoFederation, WorldTaekwondo } from 'data/martialArts';
import { useEffect, useState } from 'react';
import { MartialArt, MartialArtsStyle } from 'types/martialArts';

export default function useMartialArt(style: MartialArtsStyle): MartialArt | undefined {
    const [pageData, setPageData] = useState<MartialArt>();
    useEffect(() => {
        switch (style) {
            case MartialArtsStyle.WT_TKD:
                setPageData(WorldTaekwondo);
                break;
            case MartialArtsStyle.ITF_TKD:
                setPageData(InternationalTaekwondoFederation);
                break;
            case MartialArtsStyle.HDGD:
                setPageData(HaidongGumdo);
                break;
            default:
                break;
        }
    }, [style]);

    return pageData;
}
