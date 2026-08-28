import {FirebaseError} from 'firebase/app';
import type {FirebaseApp} from 'firebase/app';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithRedirect, signOut} from 'firebase/auth';
import type {User} from 'firebase/auth';

export const FirebaseAuth = function (firebaseApp: FirebaseApp) {
    const auth = getAuth(firebaseApp);

    return {
        signIn: async function () {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({prompt: 'select_account'});
            try {
                await signInWithRedirect(auth, provider);
                // const result = await signInWithRedirect(auth, provider);
                // const user = result.user;
                // console.log(user['displayName'], user['email'], user['photoURL']);
            } catch (error) {
                if (error instanceof FirebaseError) console.log(error.code, error.message);
                else console.error(error);
            }
        },
        signOut: function () {
            signOut(auth);
        },
        onAuthStateChanged: function (cb: (user: string | null) => void) {
            return onAuthStateChanged(auth, (user: User | null) => {
                cb(user !== null ? user.displayName : null);
            });
        },
    };
};
