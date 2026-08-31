import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {Button} from '@mui/material';
import React from 'react';

import {Auth} from '../api';

export const LoginButton: React.FC<{user: string | null}> = function ({user}) {
    const login = function (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        Auth.signIn();
    };
    const logout = function (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        Auth.signOut();
    };

    return user !== null ? (
        <Button color="error" startIcon={<LogoutIcon />} variant="outlined" onClick={logout}>
            <em>{user}</em>
        </Button>
    ) : (
        <Button aria-label="Sign in" color="success" variant="outlined" onClick={login}>
            <LoginIcon />
        </Button>
    );
};
