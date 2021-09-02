import firestore from 'firebase/firestore';

export type FirestoreDataConverter<T> = firestore.FirestoreDataConverter<T>;
export type QueryDocumentSnapshot = firestore.QueryDocumentSnapshot;
export type SnapshotOptions = firestore.SnapshotOptions;
export type DocumentData = firestore.DocumentData;
export type DocumentReference = firestore.DocumentReference;
