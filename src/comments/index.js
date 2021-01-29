import React from 'react';

import {Parent} from '../libs/modal.js';
import {Card} from './card.js';
import {CommentCard} from './comment_card.js';

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

const CommentsThread = function ({item}) {
    if (item === null) return null;
    return <CommentCard item={item} />;
};

const CommentsModal = function ({hide, item}) {
    const data = useDetails(item['objectID']);
    const [currentUser, setCurrentuser] = React.useState(null);

    const setCurrentUser = function (user) {
        setCurrentuser(user);
    };

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
                {(data === null && (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )) || (
                    <React.Fragment>
                        <Card item={data} setCurrentUser={setCurrentUser} />
                        <CommentsThread item={currentUser} />
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export const openModal = function (item) {
    Parent.render(CommentsModal, {item});
};
