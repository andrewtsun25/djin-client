import firebase from 'firebase';

import { HolisticOfficeLink } from './HolisticOfficeLink';
import { HolisticOfficeLinkType } from './HolisticOfficeLinkType';

type FirestoreDataConverter<T> = firebase.firestore.FirestoreDataConverter<T>;
type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
type SnapshotOptions = firebase.firestore.SnapshotOptions;
type DocumentData = firebase.firestore.DocumentData;

function toFirestore({ name, type, url }: HolisticOfficeLink): DocumentData {
    return {
        name,
        type,
        url,
    } as DocumentData;
}

function fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): HolisticOfficeLink {
    const data = snapshot.data(options);
    return {
        name: data.name,
        type: data.type as HolisticOfficeLinkType,
        url: data.url,
    } as HolisticOfficeLink;
}

const HolisticOfficeLinkConverter: FirestoreDataConverter<HolisticOfficeLink> = {
    toFirestore,
    fromFirestore,
};

export default HolisticOfficeLinkConverter;
