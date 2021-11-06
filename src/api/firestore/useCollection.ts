import { FirebaseContext } from 'api/context';
import {
    collection,
    DocumentData,
    getDocs,
    query,
    QueryConstraint,
    QueryDocumentSnapshot,
    QuerySnapshot,
} from 'firebase/firestore';
import { useContext } from 'react';
import useSWR, { SWRResponse } from 'swr';

import { FirestoreDocument, toFirestoneDocument } from '../../types/api/FirestoreDocument';
import { parseDocumentDates } from './parseDocumentDates';

type UseCollectionOptions<T extends DocumentData> = {
    query?: QueryConstraint[];
    parseDates?: (keyof T)[];
};

export default function useCollection<T extends DocumentData>(
    collectionId: string,
    options?: UseCollectionOptions<T>,
): SWRResponse<FirestoreDocument<T>[], Error> {
    const { query: queryConstraints = [], parseDates = [] } = options || {};
    const { db } = useContext(FirebaseContext);
    return useSWR(collectionId, async (cName): Promise<FirestoreDocument<T>[]> => {
        if (!db) {
            return [];
        }
        const fsCollection: QuerySnapshot =
            queryConstraints.length > 0
                ? await getDocs(query(collection(db, cName), ...queryConstraints))
                : await getDocs(collection(db, cName));
        return fsCollection.docs
            .filter((doc) => doc.exists())
            .map((doc) =>
                parseDocumentDates(toFirestoneDocument(doc as unknown as QueryDocumentSnapshot<T>), parseDates),
            );
    });
}
