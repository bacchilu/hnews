import 'firebase/auth';
import {getAuth, onAuthStateChanged, signOut, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';

export const Auth = function (firebaseApp) {
    const auth = getAuth(firebaseApp);

    return {
        signIn: async function () {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({prompt: 'select_account'});
            try {
                const result = await signInWithRedirect(auth, provider);
                const user = result.user;
                console.log(user['displayName'], user['email'], user['photoURL']);
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            }
        },
        signOut: function () {
            signOut(auth);
        },
        onAuthStateChanged: function (cb) {
            return onAuthStateChanged(auth, cb);
        },
    };
};
