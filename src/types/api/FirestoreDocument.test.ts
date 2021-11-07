import { DocumentSnapshot } from 'firebase/firestore';

import { FirestoreDocument, toFirestoneDocument } from './FirestoreDocument';

type TestType = {
    str: string;
};

const docValue = 'docValue';
const docId = 'docId';

describe('toFirestoreDocument', () => {
    it('converts an object of type T to a FirestoreDocument', () => {
        const snapshot: DocumentSnapshot<TestType> = {
            data: () => ({ str: docValue }),
            id: docId,
            exists: () => true,
        } as DocumentSnapshot<TestType>;
        const expected: FirestoreDocument<TestType> = {
            str: docValue,
            id: docId,
            exists: true,
        };
        const actual = toFirestoneDocument(snapshot);
        expect(actual).toEqual(expected);
    });
});
