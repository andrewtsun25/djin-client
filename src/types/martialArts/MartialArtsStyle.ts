import firebase from 'firebase';

import MartialArtsStyleType from './MartialArtsStyleType';

type DocumentReference = firebase.firestore.DocumentReference;

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
