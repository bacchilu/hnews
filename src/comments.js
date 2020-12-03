import React from 'react';

import {Parent} from './libs/modal.js';
import {Card} from './card.js';

const CommentCard = function ({items}) {
    const [head, ...tail] = items;
    if (head === undefined) return null;

    // React.useEffect(async function () {
    //     const res = await Promise.all(
    //         items.map(async function (id) {
    //             const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    //             return await res.json();
    //         })
    //     );
    //     console.log(res);
    // }, []);

    const [data, setData] = React.useState(null);
    React.useEffect(async function () {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${head}.json`);
        setData(await res.json());
    }, []);

    if (data === null)
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );

    return (
        <React.Fragment>
            <div className="card mb-3">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                        <strong>{data['by']}</strong> …
                    </h6>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: data['text']}}></p>
                </div>
            </div>
            {data['kids'] !== undefined && <CommentCard items={data['kids']} />}
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
