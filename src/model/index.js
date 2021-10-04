import {initializeApp} from 'firebase/app';

// const firebaseConfig = {
//     apiKey: 'AIzaSyBvHCpKNrfKfc2AZZLP8D0K1AGlUFcX1aE',
//     authDomain: 'test-budget-38b21.firebaseapp.com',
//     databaseURL: 'https://test-budget-38b21.firebaseio.com',
//     projectId: 'test-budget-38b21',
//     storageBucket: 'test-budget-38b21.appspot.com',
//     messagingSenderId: '1067130269246',
//     appId: '1:1067130269246:web:504d76c1afc05bcbf12b6f',
// };
const firebaseConfig = {
    apiKey: "AIzaSyAC-lbWPT-60lPwbJGBMKp_1mLKWCljW4A",
    authDomain: "hnews-f845a.firebaseapp.com",
    projectId: "hnews-f845a",
    storageBucket: "hnews-f845a.appspot.com",
    messagingSenderId: "734364993587",
    appId: "1:734364993587:web:f0020375ba6ff35b8efb46"
};
const firebaseApp = initializeApp(firebaseConfig);

import {Auth} from './auth.js';

const auth = Auth(firebaseApp);
export const signIn = auth.signIn;
export const signOut = auth.signOut;
export const onAuthStateChanged = auth.onAuthStateChanged;
