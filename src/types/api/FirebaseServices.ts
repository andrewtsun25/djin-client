import { Firestore } from 'firebase/firestore';

export type FirebaseServices = {
    db: Firestore | undefined;
};
