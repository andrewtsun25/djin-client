import { DocumentReference } from 'types/firebase/firestore';

import MartialArtsStyleType from './MartialArtsStyleType';

export interface MartialArtsStyle {
    type: MartialArtsStyleType;
    name: string;
    logoUrl: string;
    blackBeltRank: number;
    description: string;
    biography: string[];
    mediaUrl: string;
    mediaCaption: string;
    studios: DocumentReference[];
    joinDate: Date;
}
