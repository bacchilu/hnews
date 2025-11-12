import React from 'react';

import {Auth} from '../model';

export const LoginButton: React.FC<{user: string | null}> = function ({user}) {
    const login = function (e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        Auth.signIn();
    };
    const logout = function (e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        Auth.signOut();
    };

    return user !== null ? (
        <button className="btn btn-outline-danger" onClick={logout}>
            <i className="bi bi-box-arrow-in-left"></i> <em>{user}</em>
        </button>
    ) : (
        <button className="btn btn-outline-success" onClick={login}>
            <i className="bi bi-box-arrow-in-right"></i>
        </button>
    );
};
