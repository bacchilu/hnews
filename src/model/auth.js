import 'firebase/auth';

export const Auth = function (firebase) {
    return {
        signIn: function () {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({prompt: 'select_account'});
            firebase
                .auth()
                .signInWithRedirect(provider)
                .then(function (result) {
                    const user = result.user;
                    console.log(user['displayName'], user['email'], user['photoURL']);
                })
                .catch(function (error) {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        },
        signOut: function () {
            firebase.auth().signOut();
        },
        onAuthStateChanged: function (cb) {
            return firebase.auth().onAuthStateChanged(cb);
        },
    };
};