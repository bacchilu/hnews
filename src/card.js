import React from 'react';

import {openModal} from './comments';
import {relativeTime, toLocaleString} from './utils.js';

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

const Badge = function ({item}) {
    const getColor = function (points) {
        if (points >= 3200) return 'danger';
        if (points >= 1600) return 'warning';
        if (points >= 800) return 'success';
        if (points >= 400) return 'primary';
        if (points >= 200) return 'info';
        return 'secondary';
    };

    return <span className={`badge bg-${getColor(item['points'])}`}>{item['points']}</span>;
};

export const Card = function ({item, inModal}) {
    const openComments = function (e) {
        if (inModal) return;
        e.preventDefault();
        openModal(item);
    };

    return (
        <div className="card text-dark bg-light mb-1">
            <div className="card-body">
                <h5 className="card-title">{item['title']}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {item['author']}
                    <em className="float-end" title={toLocaleString(item['created_at'])}>
                        {relativeTime(item['created_at'])}
                    </em>
                </h6>
                <CardText item={item} />
                <p>
                    <Badge item={item} />
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
