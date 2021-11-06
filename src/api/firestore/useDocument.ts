import { doc, DocumentData, DocumentSnapshot, getDoc } from 'firebase/firestore';
import { useContext } from 'react';
import useSWR, { SWRResponse } from 'swr';
import { FirestoreDocument, toFirestoneDocument } from 'types/api/FirestoreDocument';

import { FirebaseContext } from '../context';
import { parseDocumentDates } from './parseDocumentDates';

type UseDocumentOptions<T extends DocumentData> = {
    parseDates?: (keyof T)[];
};

export default function useDocument<T extends DocumentData>(
    collectionId: string,
    path: string,
    options?: UseDocumentOptions<T>,
): SWRResponse<FirestoreDocument<T> | null, Error> {
    const { parseDates = [] } = options || {};
    const { db } = useContext(FirebaseContext);
    return useSWR(path, async (docRef): Promise<FirestoreDocument<T> | null> => {
        if (!db) {
            return null;
        }
        const d = await getDoc(doc(db, collectionId, docRef));
        return d.exists()
            ? parseDocumentDates(toFirestoneDocument(d as unknown as DocumentSnapshot<T>), parseDates)
            : null;
    });
}
