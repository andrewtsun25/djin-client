import firebase from 'firebase';

import { HolisticOfficeLinkType } from '../types/holisticOffice';
import { db } from './database';

type Query = firebase.firestore.Query;

const Collections = {
    HolisticOfficeLinks: 'holisticOfficeLinks',
    HolisticOfficeModules: 'holisticOfficeModules',
};

/**
 * Retrieve hyperlinks of a given type
 * @param type - The type of link too retrieve
 * @return - A Query of the collection of links that can be further processed.
 */
function getLinks(type: HolisticOfficeLinkType): Query {
    return db.collection(Collections.HolisticOfficeLinks).where('type', '==', type);
}

/**
 * Return all architectural modules of Holistic Office.
 */
function getModules(): Query {
    return db.collection(Collections.HolisticOfficeModules);
}

const HolisticOfficeQueries = {
    getLinks,
    getModules,
};

export default HolisticOfficeQueries;
