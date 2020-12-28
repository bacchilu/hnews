import React from 'react';

import {relativeTime, toLocaleString, Badge} from '../utils.js';

const CardText = function ({item}) {
    if (item['text'] !== undefined) return <em dangerouslySetInnerHTML={{__html: item['text']}}></em>;
    return (
        <p className="card-text">
            <a href={item['url']} target="_blank">
                {item['url']}
            </a>
        </p>
    );
};

export const Card = function ({item}) {
    return (
        <div className="card text-dark bg-light mb-1">
            <div className="card-body">
                <h5 className="card-title">{item['title']}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {item['by']}
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
            </div>
        </div>
    );
};
