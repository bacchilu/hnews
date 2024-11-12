import React from 'react';

import {HNItem} from '../../model/hn';
import {relativeTime, toLocaleString} from '../../utils';
import {Badge} from '../badge';
import {Comments} from '../card/comments';
import {Twitter} from '../twitter';
import {useRefUserDetails} from '../user_details';

const Card: React.FC<{children: React.ReactNode}> = function ({children}) {
    return (
        <div className="card text-dark bg-light mb-1 shadow rounded">
            <div className="card-body">{children}</div>
        </div>
    );
};

export const Title: React.FC<{item: HNItem}> = function ({item}) {
    const isFresh = new Date().getTime() - item.created_at.getTime() <= 1000 * 60 * 60 * 25;

    return (
        <div className="mb-3">
            <strong className={`card-title ${isFresh ? 'border-start border-3 border-success p-1' : ''}`}>
                {item.title}
            </strong>
            <span className="float-end">
                <Badge score={item.points} />
            </span>
        </div>
    );
};

export const SubTitle: React.FC<{item: HNItem}> = function ({item}) {
    const userEl = useRefUserDetails(item.author);

    return (
        <div className="card-subtitle mb-2 text-muted">
            <span ref={userEl} style={{cursor: 'pointer'}}>
                {item.author}
            </span>
            <em className="float-end" title={toLocaleString(item.created_at)}>
                {relativeTime(item.created_at)}
            </em>
        </div>
    );
};

export const Footer: React.FC<{item: HNItem}> = function ({item}) {
    return (
        <div>
            <Twitter hnItem={item} />
            <span className="float-end">
                <Comments item={item} />
            </span>
        </div>
    );
};

const Url: React.FC<{item: HNItem}> = function ({item}) {
    let res = <span>{item.url}</span>;
    if (item.url !== undefined) {
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

export const CardText: React.FC<{item: HNItem}> = function ({item}) {
    return (
        <>
            {item.story_text !== undefined && (
                <p>
                    <em dangerouslySetInnerHTML={{__html: item.story_text}}></em>
                </p>
            )}
            <p className="card-text text-truncate">
                <a href={item.url} target="_blank">
                    <Url item={item} />
                </a>
            </p>
        </>
    );
};

export default Card;
