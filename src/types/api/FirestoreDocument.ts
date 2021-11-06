import { DocumentData, DocumentReference, DocumentSnapshot } from 'firebase/firestore';

export type FirestoreDocument<T extends DocumentData> = T & {
    id: string;
    exists: boolean;
    ref: DocumentReference<T>;
};

export function toFirestoneDocument<T extends DocumentData>(snapshot: DocumentSnapshot<T>): FirestoreDocument<T> {
    return {
        ...snapshot.data(),
        id: snapshot.id,
        exists: snapshot.exists(),
        ref: snapshot.ref,
    } as unknown as FirestoreDocument<T>;
}
