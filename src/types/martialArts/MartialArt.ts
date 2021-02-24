import MartialArtsType from './MartialArtsType';
import StudioIds from './StudioIds';

export interface MartialArt {
    type: MartialArtsType;
    name: string;
    logoUrl: string;
    blackBeltRank: number;
    description: string;
    biography: string;
    mediaUrl: string;
    mediaCaption: string;
    studios: StudioIds[];
}
