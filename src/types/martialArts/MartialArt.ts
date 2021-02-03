import MartialArtsStyle from "./MartialArtsStyles";
import { Dojang } from "./Dojang";

export interface MartialArt {
    style: MartialArtsStyle;
    styleName: string;
    logoUrl: string;
    blackBeltRank: number;
    introduction: string;
    biography: string;
    imgUrl: string;
    imgCaption: string;
    studios: Dojang[];
}
