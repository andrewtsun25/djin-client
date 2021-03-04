import 'firebase/firestore';

import firebase from 'firebase/app';
import { Fuego } from 'types/api';

type Config = Parameters<typeof firebase.initializeApp>[0];

const config: Config = {
    apiKey: 'AIzaSyCE57QjDywg1ZJSwJDSBW4Pbwpjqz_U4fA',
    authDomain: 'djin-dev.firebaseapp.com',
    projectId: 'djin-dev',
    storageBucket: 'djin-dev.appspot.com',
    messagingSenderId: '491248123522',
    appId: '1:491248123522:web:f49fcc67aaa94d70787e9b',
    measurementId: 'G-3KT3E4JR9B',
};

const fuego = new Fuego(config);

export { fuego };
