import 'firebase/firestore';

import firebase from 'firebase/app';

const config = {
    apiKey: 'AIzaSyCE57QjDywg1ZJSwJDSBW4Pbwpjqz_U4fA',
    authDomain: 'djin-dev.firebaseapp.com',
    projectId: 'djin-dev',
    storageBucket: 'djin-dev.appspot.com',
    messagingSenderId: '491248123522',
    appId: '1:491248123522:web:f49fcc67aaa94d70787e9b',
    measurementId: 'G-3KT3E4JR9B',
};

firebase.initializeApp(config);
const db = firebase.firestore();

export { db };
