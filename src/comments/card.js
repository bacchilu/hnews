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
                cb();
                return await res.json();
            })
        ),
    ];
};

export const CommentCard = function ({id, items}) {
    if (items.length === 0) return null;

    const [comments, setComments] = React.useState(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [loading, setLoading] = React.useState('Loading...');
    React.useEffect(
        function () {
            setComments(null);
            setCurrentIndex(0);
            let i = 1;
            const [controller, pComments] = fetchComments(items, function () {
                setLoading(`${i}/${items.length}`);
                i += 1;
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

    if (comments === null)
        return (
            <div className="d-flex align-items-center">
                <em>{loading}</em>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        );

    const userBadges = comments.map(function (e, index) {
        const onClick = function (e) {
            e.preventDefault();
            setCurrentIndex(index);
        };

        return index === currentIndex ? (
            <span key={e['id']} className="badge rounded-pill bg-secondary">
                {e['by']}
            </span>
        ) : (
            <a key={e['id']} href="#" className="badge rounded-pill bg-light text-dark" onClick={onClick}>
                {e['by']}
            </a>
        );
    });

    return (
        <React.Fragment>
            <div className="card mb-1">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                        {userBadges}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {comments[currentIndex]['by']}
                        <em className="float-end" title={toLocaleString(comments[currentIndex]['time'], true)}>
                            {relativeTime(comments[currentIndex]['time'], true)}
                        </em>
                    </h6>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: comments[currentIndex]['text']}}></p>
                </div>
            </div>
            {comments[currentIndex]['kids'] !== undefined && <CommentCard items={comments[currentIndex]['kids']} />}
        </React.Fragment>
    );
};
