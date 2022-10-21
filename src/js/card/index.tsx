import React from 'react';

import {HNItem} from '../fetcher';
import {Badge, relativeTime, toLocaleString, Twitter, useRefUserDetails} from '../utils';
import {Comments} from './comments';

const Url = function ({item}: {item: HNItem}) {
    let res = <span>{item.url}</span>;
    if (item.url !== null) {
        const slitted = item.url.split('/');
        const schema = slitted.slice(0, 2).join('/');
        const domain = slitted[2];
        const path = slitted.slice(3).join('/');
        res = (
            <span>
                {schema}/<strong>{domain}</strong>/{path}
            </span>
        );
    }

    return res;
};

const CardText = function ({item}: {item: HNItem}) {
    if (item.story_text !== null) return <em dangerouslySetInnerHTML={{__html: item.story_text}}></em>;

    return (
        <p className="card-text text-truncate">
            <a href={item.url} target="_blank">
                <Url item={item} />
            </a>
        </p>
    );
};

export const Card = function ({item, inModal}: {item: HNItem; inModal: boolean}) {
    const userEl = useRefUserDetails(item.author);

    return (
        <div className="card text-dark bg-light mb-1 shadow rounded">
            <div className="card-body">
                <p>
                    <strong className="card-title">{item.title}</strong>
                    <span className="float-end">
                        <Badge score={item.points} />
                    </span>
                </p>
                <p className="card-subtitle mb-2 text-muted">
                    <span ref={userEl} style={{cursor: 'pointer'}}>
                        {item.author}
                    </span>
                    <em className="float-end" title={toLocaleString(item.created_at)}>
                        {relativeTime(item.created_at)}
                    </em>
                </p>
                <CardText item={item} />
                <p>
                    <Twitter item={item} />
                    <span className="float-end">
                        {/* <Comments item={item} inModal={inModal} /> */}
                        <Comments item={item} />
                    </span>
                </p>
            </div>
        </div>
    );
};
