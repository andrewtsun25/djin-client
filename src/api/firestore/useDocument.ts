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
): SWRResponse<FirestoreDocument<T> | null, Error> {
    const { parseDates = [] } = options || {};
    const { db } = useContext(FirebaseContext);
    return useSWR(db ? docPath : null, async (dp: string): Promise<FirestoreDocument<T> | null> => {
        // This code path should never be reached, as useSWR does not trigger a request if the database is not present.
        if (!db) {
            return null;
        }
        const d = await getDoc(doc(db, dp));
        return d.exists()
            ? parseDocumentDates(toFirestoneDocument(d as unknown as DocumentSnapshot<T>), parseDates)
            : null;
    });
}
