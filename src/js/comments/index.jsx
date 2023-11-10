import React from 'react';

import { Spinner } from '../utils/index';
import { Card } from './card';
import { CommentCard } from './comment_card';

const useDetails = function (id) {
    const [data, setData] = React.useState(undefined);
    React.useEffect(
        function () {
            const f = async function () {
                const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                setData(await res.json());
            };
            f();
        },
        [id]
    );

    return data;
};

const CommentsThread = function ({ item }) {
    if (item === null) return null;
    return <CommentCard item={item} />;
};

export const CommentsModal = function ({ item }) {
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
                {(data === undefined && <Spinner />) || (
                    <React.Fragment>
                        <Card item={data} setCurrentUser={setCurrentUser} />
                        <CommentsThread item={currentUser} />
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
};