import React from 'react';
import hdate from 'human-date';

import {signIn, signOut, onAuthStateChanged} from './model';

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

const UserDetails = (function () {
    const cache = {};
    return {
        get: async function (id) {
            if (cache[id] !== undefined) return cache[id];
            cache[id] = await (await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)).json();
            return cache[id];
        },
    };
})();

export const useRefUserDetails = function (user) {
    const domEl = React.useRef(null);
    React.useEffect(
        function () {
            if (user === undefined) return;
            const popover = new bootstrap.Popover(domEl.current, {
                container: 'body',
                content: `
                <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            `,
                html: true,
                placement: 'auto',
                trigger: 'click hover',
            });
            const listener = async function () {
                const res = await UserDetails.get(user);
                const t = `<p class="fw-lighter">
                <small>
                    <em title=${toLocaleString(res['created'] * 1000)}>${relativeTime(res['created'] * 1000)}</em>
                    <br />
                    ${res['about'] !== undefined ? res['about'] : ''}
                </small>
            </p>`;
                popover.tip.getElementsByClassName('popover-body')[0].innerHTML = t;
            };
            domEl.current.addEventListener('inserted.bs.popover', listener);

            return function () {
                // userEl.current.removeEventListener('inserted.bs.popover', listener);
                popover.hide();
            };
        },
        [user]
    );

    return domEl;
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
