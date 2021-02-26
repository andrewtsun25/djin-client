import firebase from 'firebase';

import { db } from './database';
import DocumentReference = firebase.firestore.DocumentReference;

type Query = firebase.firestore.Query;

const MartialArtsCollections: Record<string, string> = {
    Styles: 'martialArtsStyles',
    Studios: 'martialArtsStudios',
};

/**
 * Return all martial arts styles
 */
function getStyles(): Query {
    return db.collection(MartialArtsCollections.Styles);
}

/**
 * Return the path for a particular studio.
 */
function getStudio(studioPath: string): DocumentReference {
    return db.doc(studioPath);
}

const MartialArtsAPI = {
    getStyles,
    getStudio,
};

export default MartialArtsAPI;
