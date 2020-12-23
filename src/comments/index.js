import React from 'react';

import {Parent} from '../libs/modal.js';
import {Card} from '../card.js';
import {CommentCard} from './card.js';

const useDetails = function (id) {
    const [data, setData] = React.useState(null);
    React.useEffect(
        async function () {
            const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            setData(await res.json());
        },
        [id]
    );

    return data;
};

const Comments = function ({item}) {
    const data = useDetails(item['objectID']);

    if (data === null) return null;
    return <CommentCard id={data['id']} items={data['kids']} />;
};

const CommentsModal = function ({hide, item}) {
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">#{item['objectID']}</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                ></button>
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
