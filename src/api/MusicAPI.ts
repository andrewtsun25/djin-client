import firebase from 'firebase';

import { db } from './database';

type Query = firebase.firestore.Query;

const MusicCollections: Record<string, string> = {
    Instruments: 'musicInstruments',
    Scores: 'musicScores',
};

/**
 * Return all architectural modules of Holistic Office.
 */
function getInstruments(): Query {
    return db.collection(MusicCollections.Instruments);
}

/**
 * Return all musical compositions and associated scores.
 */
function getScores(): Query {
    return db.collection(MusicCollections.Scores);
}

const MusicAPI = {
    getInstruments,
    getScores,
};

export default MusicAPI;
