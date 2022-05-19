import React from 'react';

import {relativeTime, toLocaleString, Badge} from '../utils/index.js';
import {useCommentsGetter} from './utils.js';
import {useRefUserDetails} from '../utils/index.js';
import {ProgressBar} from './progress.js';

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

const CardText = function ({item}) {
    if (item['text'] !== undefined) return <em dangerouslySetInnerHTML={{__html: item['text']}}></em>;
    return (
        <p className="card-text text-truncate">
            <a href={item['url']} target="_blank">
                {item['url']}
            </a>
        </p>
    );
};

export const Card = function ({item, setCurrentUser}) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [comments, progress] = useCommentsGetter(item);
    React.useEffect(
        function () {
            if (comments !== null) setCurrentUser(comments[currentIndex]);
        },
        [comments, currentIndex]
    );
    const userEl = useRefUserDetails(item['by']);

    return (
        <div className="card text-dark bg-light mb-1 shadow rounded">
            <div className="card-body">
                <h5 className="card-title">{item['title']}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    <span ref={userEl}>{item['by']}</span>
                    <em className="float-end" title={toLocaleString(item['time'] * 1000)}>
                        {relativeTime(item['time'] * 1000)}
                    </em>
                </h6>
                <CardText item={item} />
                <p>
                    <Badge score={item['score']} />
                    <a
                        href={`https://news.ycombinator.com/item?id=${item['id']}`}
                        target="_blank"
                        className="card-link float-end"
                    >
                        {item['descendants']} Comments
                    </a>
                </p>
                {(comments === null && <ProgressBar i={progress} total={item['kids'].length} />) || (
                    <h6 className="card-subtitle mb-2 text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                        <UsersList comments={comments} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                    </h6>
                )}
            </div>
        </div>
    );
};
