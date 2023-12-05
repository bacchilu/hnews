import hdate from 'human-date';
import React from 'react';

import {HNItem} from '../hn_hook';
import {Auth} from '../model';

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

export const useUser = function () {
    const [user, setUser] = React.useState<string | null>(null);
    React.useEffect(function () {
        return Auth.onAuthStateChanged(setUser);
    }, []);
    return user;
};

export const Spinner: React.FC = function () {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export const Twitter = function ({item}: {item: HNItem}) {
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
