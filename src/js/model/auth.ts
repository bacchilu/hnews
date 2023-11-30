import {FirebaseApp} from 'firebase/app';
import {GoogleAuthProvider, User, getAuth, onAuthStateChanged, signInWithRedirect, signOut} from 'firebase/auth';

export const Auth = function (firebaseApp: FirebaseApp) {
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
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
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
