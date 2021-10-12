import React from 'react';

import {relativeTime, toLocaleString} from '../utils.js';
import {ProgressBar} from './progress.js';
import {useCommentsGetter} from './utils.js';
import {useRefUserDetails} from '../utils.js';

const UsersList = function ({comments, currentIndex, setCurrentIndex}) {
    return comments.map(function (item, index) {
        const onClick = function (e) {
            e.preventDefault();
            setCurrentIndex(index);
        };

        return index === currentIndex ? (
            <span key={item['id']} className="badge rounded-pill bg-secondary">
                {item['by']}
            </span>
        ) : (
            <a key={item['id']} href="#" className="badge rounded-pill bg-light text-dark" onClick={onClick}>
                {item['by']}
            </a>
        );
    });
};

export const CommentCard = function ({item}) {
    const kids = item['kids'] !== undefined ? item['kids'] : [];

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [comments, progress] = useCommentsGetter(item);
    React.useEffect(
        function () {
            if (kids.length > 0) setCurrentIndex(0);
        },
        [item]
    );
    const userEl = useRefUserDetails(item['by']);

    return (
        <React.Fragment>
            <div className="card mb-1 shadow rounded">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                        <span ref={userEl}>{item['by']}</span>
                        <em className="float-end" title={toLocaleString(item['time'], true)}>
                            {relativeTime(item['time'], true)}
                        </em>
                    </h6>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: item['text']}}></p>
                    {(comments === null && <ProgressBar i={progress} total={kids.length} />) || (
                        <h6 className="card-subtitle mb-2 text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                            <UsersList
                                comments={comments}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                            />
                        </h6>
                    )}
                </div>
            </div>
            {comments !== null && comments.length > 0 && <CommentCard item={comments[currentIndex]} />}
        </React.Fragment>
    );
};
