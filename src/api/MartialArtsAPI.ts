import firebase from 'firebase';
import { MartialArtsStyleType } from 'types/martialArts';

import { db } from './fuego';

type Query = firebase.firestore.Query;

const MartialArtsCollections: Record<string, string> = {
    Styles: 'martialArtsStyles',
    Studios: 'martialArtsStudios',
};

/**
 * Return all martial arts styles
 */
function getStyle(martialArtsStyleType: MartialArtsStyleType): Query {
    return db.collection(MartialArtsCollections.Styles).where('type', '==', martialArtsStyleType);
}

const MartialArtsAPI = {
    getStyle,
};

export default MartialArtsAPI;
