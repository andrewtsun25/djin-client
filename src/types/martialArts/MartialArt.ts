import { Dojang } from './Dojang';
import MartialArtsStyle from './MartialArtsStyles';

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
