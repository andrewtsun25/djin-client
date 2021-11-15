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
    docPath: string,
    options?: UseDocumentOptions<T>,
): SWRResponse<FirestoreDocument<T>, Error> {
    const { parseDates = [] } = options || {};
    const { db } = useContext(FirebaseContext);
    return useSWR(db ? `${docPath}_${parseDates}` : null, async (key: string): Promise<FirestoreDocument<T>> => {
        // This code path should never be reached, as useSWR does not trigger a request if the database is not present.
        if (!db) {
            throw new Error('Firestore DB has not been initialized yet.');
        }
        const dp = key.split('_')[0];
        const d = await getDoc(doc(db, dp));
        if (!d.exists()) {
            throw new Error('Document does not exist.');
        }
        return parseDocumentDates(toFirestoneDocument(d as unknown as DocumentSnapshot<T>), parseDates);
    });
}
