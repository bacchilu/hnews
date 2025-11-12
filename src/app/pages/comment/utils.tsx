import React from 'react';

import type {HNItem} from './hooks';

export const CardText = function ({item}) {
    if (item['text'] !== undefined) return <em dangerouslySetInnerHTML={{__html: item['text']}}></em>;
    return (
        <p className="card-text text-truncate">
            <a href={item['url']} target="_blank">
                {item['url']}
            </a>
        </p>
    );
};

export const HNLink: React.FC<{hnItem: HNItem}> = function ({hnItem}) {
    return (
        <a
            href={`https://news.ycombinator.com/item?id=${hnItem.id}`}
            target="_blank"
            className="btn btn-primary btn-sm position-relative me-4 float-end"
        >
            <i className="bi bi-people-fill"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {hnItem.descendants}
                <span className="visually-hidden">comments</span>
            </span>
        </a>
    );
};
