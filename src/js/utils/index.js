import React from 'react';
import hdate from 'human-date';

import {signIn, signOut, onAuthStateChanged} from '../model';

export {useRefUserDetails} from './user_details';

export const relativeTime = function (createdAt, isEpoch = false) {
    let d;
    if (isEpoch) {
        d = new Date(0);
        d.setUTCSeconds(createdAt);
    } else d = new Date(createdAt);
    return hdate.relativeTime(d);
};

export const toLocaleString = function (createdAt, isEpoch = false) {
    let d;
    if (isEpoch) {
        d = new Date(0);
        d.setUTCSeconds(createdAt);
    } else d = new Date(createdAt);
    return d.toLocaleString('en-US', {hour12: false});
};

export const Badge = function ({score}) {
    const getColor = function (points) {
        if (points >= 3200) return 'danger';
        if (points >= 1600) return 'warning';
        if (points >= 800) return 'success';
        if (points >= 400) return 'primary';
        if (points >= 200) return 'info';
        return 'secondary';
    };

    return <span className={`badge bg-${getColor(score)}`}>{score}</span>;
};

export const useUser = function () {
    const [user, setUser] = React.useState(null);
    React.useEffect(function () {
        return onAuthStateChanged(setUser);
    }, []);
    return user;
};

export const LoginButton = function ({user}) {
    const login = function (e) {
        e.preventDefault();
        signIn();
    };
    const logout = function (e) {
        e.preventDefault();
        signOut();
    };

    return user !== null ? (
        <button className="btn btn-outline-danger" onClick={logout}>
            <i className="bi bi-box-arrow-in-left"></i> <em>{user['displayName']}</em>
        </button>
    ) : (
        <button className="btn btn-outline-success" onClick={login}>
            <i className="bi bi-box-arrow-in-right"></i>
        </button>
    );
};

export const Spinner = function (props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};
