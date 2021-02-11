import React from 'react';

import {relativeTime, toLocaleString} from '../utils.js';

const fetchComments = function (items, cb) {
    const controller = new AbortController();
    return [
        controller,
        Promise.all(
            items.map(async function (id) {
                const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
                    signal: controller.signal,
                });
                const data = await res.json();
                cb();
                return data;
            })
        ),
    ];
};

export const useCommentsGetter = function (item) {
    const kids = item['kids'] !== undefined ? item['kids'] : [];

    const [comments, setComments] = React.useState(null);
    const [progress, setProgress] = React.useState(0);
    React.useEffect(
        function () {
            setComments(null);
            setProgress(0);
            if (kids.length === 0) {
                setComments([]);
                setProgress(0);
                return;
            }
            const [controller, pComments] = fetchComments(kids, function () {
                setProgress(function (i) {
                    return i + 1;
                });
            });
            (async function () {
                const res = await pComments;
                setComments(
                    res.filter(function (item) {
                        return item['deleted'] === undefined || !item['deleted'];
                    })
                );
            })();

            return function () {
                controller.abort();
            };
        },
        [item]
    );

    return [comments, progress];
};

export const User = function ({id}) {
    const [details, setDetails] = React.useState(null);
    React.useEffect(
        async function () {
            const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
            setDetails(await res.json());
        },
        [id]
    );

    if (details === null) return null;

    return (
        <p className="fw-lighter">
            <small>
                <em title={toLocaleString(details['created'] * 1000)}>{relativeTime(details['created'] * 1000)}</em>
                <br />
                {details['about']}
            </small>
        </p>
    );
};
