import React from 'react';

import {Auth} from '../model';

export const useUser = function () {
    const [user, setUser] = React.useState<string | null>(null);
    React.useEffect(function () {
        return Auth.onAuthStateChanged(setUser);
    }, []);
    return user;
};
