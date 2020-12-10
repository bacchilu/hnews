import React from 'react';

import {Parent} from '../libs/modal.js';
import {Card} from '../card.js';
import {CommentCard} from './card.js';

const Comments = function ({item}) {
    const [data, setData] = React.useState(null);
    React.useEffect(async function () {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item['objectID']}.json`);
        setData(await res.json());
    }, []);

    if (data === null)
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );

    return <CommentCard id={data['id']} items={data['kids']} />;
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
