import React from 'react';

import {openModal} from './comments';
import {relativeTime, toLocaleString, Badge, useRefUserDetails} from './utils.js';

const CardText = function ({item}) {
    if (item['story_text'] !== null) return <em dangerouslySetInnerHTML={{__html: item['story_text']}}></em>;
    return (
        <p className="card-text">
            <a href={item['url']} target="_blank">
                {item['url']}
            </a>
        </p>
    );
};

export const Card = function ({item, inModal}) {
    const userEl = useRefUserDetails(item['author']);

    const openComments = function (e) {
        if (inModal) return;
        e.preventDefault();
        openModal(item);
    };

    return (
        <div className="card text-dark bg-light mb-1 shadow rounded">
            <div className="card-body">
                <h5 className="card-title">{item['title']}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    <span ref={userEl}>{item['author']}</span>
                    <em className="float-end" title={toLocaleString(item['created_at'])}>
                        {relativeTime(item['created_at'])}
                    </em>
                </h6>
                <CardText item={item} />
                <p>
                    <Badge score={item['points']} />
                    <a
                        href={`https://news.ycombinator.com/item?id=${item['objectID']}`}
                        target="_blank"
                        className="card-link float-end"
                        onClick={openComments}
                    >
                        {item['num_comments']} Comments
                    </a>
                </p>
            </div>
        </div>
    );
};
