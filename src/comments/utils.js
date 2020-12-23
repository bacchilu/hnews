import React from 'react';

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

export const useCommentsGetter = function (items) {
    const [comments, setComments] = React.useState(null);
    const [progress, setProgress] = React.useState(0);
    React.useEffect(
        function () {
            setComments(null);
            setProgress(0);
            const [controller, pComments] = fetchComments(items, function () {
                setProgress(function (i) {
                    return i + 1;
                });
            });
            (async function () {
                setComments(await pComments);
            })();

            return function () {
                controller.abort();
            };
        },
        [items]
    );

    return [comments, progress];
};
