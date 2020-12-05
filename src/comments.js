import React from 'react';

import {Parent} from './libs/modal.js';
import {Card} from './card.js';

const CommentCard = function ({items}) {
    if (items.length === 0) return null;

    const [comments, setComments] = React.useState(null);
    React.useEffect(
        async function () {
            setComments(null);
            const res = await Promise.all(
                items.map(async function (id) {
                    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                    return await res.json();
                })
            );
            setComments(res);
        },
        [items]
    );

    const [currentIndex, setCurrentIndex] = React.useState(0);

    if (comments === null)
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );

    const userBadges = comments.map(function (e, index) {
        const onClick = function (e) {
            e.preventDefault();
            setCurrentIndex(index);
            // Non convinto... E poi se sotto c'è qualche indice diverso da 0, così valorizzato rimane.
        };

        return index === currentIndex ? (
            <span key={e['id']} className="badge badge-pill badge-secondary">
                {e['by']}
            </span>
        ) : (
            <a key={e['id']} href="#" className="badge badge-pill badge-light" onClick={onClick}>
                {e['by']}
            </a>
        );
    });
    const current = comments[currentIndex];

    return (
        <React.Fragment>
            <div className="card mb-3">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{userBadges}</h6>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: current['text']}}></p>
                </div>
            </div>
            {current['kids'] !== undefined && <CommentCard items={current['kids']} />}
        </React.Fragment>
    );
};

const Comments = function ({item}) {
    const [data, setData] = React.useState(null);
    React.useEffect(async function () {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item['objectID']}.json`);
        setData(await res.json());
    }, []);

    if (data === null)
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );

    return <CommentCard items={data['kids']} />;
};

const CommentsModal = function ({item}) {
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">#{item['objectID']}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <Card item={item} inModal={true} />
                <Comments item={item} />
            </div>
        </div>
    );
};

export const openModal = function (item) {
    Parent.render(CommentsModal, {item});
};
