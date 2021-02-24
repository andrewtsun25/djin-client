import { HaidongGumdo, InternationalTaekwondoFederation, WorldTaekwondo } from 'data/martialArts/martialArts';
import { useEffect, useState } from 'react';
import { MartialArt, MartialArtsType } from 'types/martialArts';

export default function useMartialArt(style: MartialArtsType): MartialArt | undefined {
    const [pageData, setPageData] = useState<MartialArt>();
    useEffect(() => {
        switch (style) {
            case MartialArtsType.WT_TKD:
                setPageData(WorldTaekwondo);
                break;
            case MartialArtsType.ITF_TKD:
                setPageData(InternationalTaekwondoFederation);
                break;
            case MartialArtsType.HDGD:
                setPageData(HaidongGumdo);
                break;
            default:
                break;
        }
    }, [style]);

    return pageData;
}
