import { useEffect, useState } from 'react';
import { MartialArtsStyle } from 'types/martialArts';
import { MartialArt } from 'types/martialArts';
import { WorldTaekwondo, InternationalTaekwondoFederation } from 'const/data/martialArts';

export default function useMartialArts(style: MartialArtsStyle): MartialArt | undefined {
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
