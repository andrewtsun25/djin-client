import MartialArtsStyle from './MartialArtsStyles';
import { Studio } from './Studio';

export interface MartialArt {
    style: MartialArtsStyle;
    styleName: string;
    logoUrl: string;
    blackBeltRank: number;
    introduction: string;
    biography: string;
    imgUrl: string;
    imgCaption: string;
    studios: Studio[];
}
