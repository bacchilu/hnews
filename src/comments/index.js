import React from 'react';

import {Card} from './card.js';
import {CommentCard} from './comment_card.js';
import {Spinner} from '../utils.js';

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

export const CommentsModal = function ({item}) {
    const data = useDetails(item['objectID']);
    const [currentUser, setCurrentuser] = React.useState(null);

    const setCurrentUser = function (user) {
        setCurrentuser(user);
    };

    return (
        <React.Fragment>
            <div className="modal-header">
                <h5 className="modal-title">#{item['objectID']}</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {(data === null && <Spinner />) || (
                    <React.Fragment>
                        <Card item={data} setCurrentUser={setCurrentUser} />
                        <CommentsThread item={currentUser} />
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
};
