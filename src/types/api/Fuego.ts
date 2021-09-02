import { FirebaseOptions, getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig: FirebaseOptions = {
    apiKey: 'AIzaSyCE57QjDywg1ZJSwJDSBW4Pbwpjqz_U4fA',
    authDomain: 'djin-dev.firebaseapp.com',
    projectId: 'djin-dev',
    storageBucket: 'djin-dev.appspot.com',
    messagingSenderId: '491248123522',
    appId: '1:491248123522:web:f49fcc67aaa94d70787e9b',
    measurementId: 'G-3KT3E4JR9B',
};

const fbConfig = initializeApp(firebaseConfig);
const auth = getAuth(getApp());
const db = getFirestore(getApp());
const functions = getFunctions(getApp());
const storage = getStorage(getApp());

export class Fuego {
    public db: typeof db;
    public auth: typeof auth;
    public functions: typeof functions;
    public storage: typeof storage;

    constructor() {
        this.db = !fbConfig ? db : db; // this is probably pointless
        this.auth = auth;
        this.functions = functions;
        this.storage = storage;
    }
}
