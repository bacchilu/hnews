import React from 'react';

import {relativeTime, toLocaleString} from '../utils.js';
import {ProgressBar} from './progress.js';
import {useCommentsGetter} from './utils.js';

export const CommentCard = function ({id, items}) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [comments, progress] = useCommentsGetter(items);
    React.useEffect(
        function () {
            setCurrentIndex(0);
        },
        [items]
    );

    if (items.length === 0) return null;

    if (comments === null) return <ProgressBar i={progress} total={items.length} />;

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
