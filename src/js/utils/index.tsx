import hdate from 'human-date';
import React from 'react';

import {Item} from '..';
import {onAuthStateChanged, signIn, signOut} from '../model';

export {useRefUserDetails} from './user_details';

export const relativeTime = function (createdAt: string | number, isEpoch = false) {
    let d: Date;
    if (isEpoch) {
        d = new Date(0);
        d.setUTCSeconds(createdAt as number);
    } else d = new Date(createdAt);
    return hdate.relativeTime(d);
};

export const toLocaleString = function (createdAt: string | number, isEpoch = false) {
    let d: Date;
    if (isEpoch) {
        d = new Date(0);
        d.setUTCSeconds(createdAt as number);
    } else d = new Date(createdAt);
    return d.toLocaleString('en-US', {hour12: false});
};

enum COLOR {
    DANGER = 'danger',
    WARNING = 'warning',
    SUCCESS = 'success',
    PRIMARY = 'primary',
    INFO = 'info',
    SECONDARY = 'secondary',
}

export const Badge = function ({score}: {score: number}) {
    const getColor = function (points: number) {
        if (points >= 3200) return COLOR.DANGER;
        if (points >= 1600) return COLOR.WARNING;
        if (points >= 800) return COLOR.SUCCESS;
        if (points >= 400) return COLOR.PRIMARY;
        if (points >= 200) return COLOR.INFO;
        return COLOR.SECONDARY;
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

export const Twitter = function ({item}: {item: Item}) {
    const twitterUrl = new URL('https://twitter.com/intent/tweet');
    twitterUrl.searchParams.append('text', item.title);
    twitterUrl.searchParams.append(
        'url',
        item.url !== null ? item.url : `https://news.ycombinator.com/item?id=${item.objectID}`
    );
    twitterUrl.searchParams.append('hashtags', 'hackernews');

    return (
        <a href={twitterUrl.href}>
            <i className="bi bi-twitter"></i>
        </a>
    );
};
