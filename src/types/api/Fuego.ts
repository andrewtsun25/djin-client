import firebase from 'firebase/app';

type Config = Parameters<typeof firebase.initializeApp>[0];

// Hacked version of the Fuego class (https://github.com/nandorojo/swr-firestore/blob/master/src/classes/Fuego.ts) because of differences between Firebase v7/v8 https://github.com/nandorojo/swr-firestore/issues/59
export class Fuego {
    public db: ReturnType<firebase.app.App['firestore']>;
    public auth: typeof firebase.auth;
    public functions: typeof firebase.functions;
    public storage: typeof firebase.storage;
    constructor(config: Config) {
        this.db = !firebase.apps.length ? firebase.initializeApp(config).firestore() : firebase.app().firestore();
        this.auth = firebase.auth;
        this.functions = firebase.functions;
        this.storage = firebase.storage;
    }
}
