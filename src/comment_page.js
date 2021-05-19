import React from 'react';
import {useParams} from 'react-router-dom';
import useSWR from 'swr';

import {Spinner, Badge} from './utils.js';

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

export const CommentPage = function (props) {
    const {commentId} = useParams();
    const {data, error} = useSWR(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`);

    if (error !== undefined)
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    if (data === undefined) return <Spinner />;

    const commenters = data.kids.map(function (item) {
        return (
            <a key={item} href="#" className="badge rounded-pill bg-light text-dark">
                {item}
            </a>
        );
    });

    return (
        <React.Fragment>
            <h1>#{data.id}</h1>
            <h2>{data.title}</h2>
            <CardText item={data} />
            <p>
                <Badge score={data['score']} />
                <a href={`https://news.ycombinator.com/item?id=${data['id']}`} target="_blank" className="float-end">
                    {data['descendants']} Comments
                </a>
            </p>
            <p className="text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
                <span className="badge rounded-pill bg-secondary">luca</span>{' '}
                <a href="#" className="badge rounded-pill bg-light text-dark">
                    matteo
                </a>
                {commenters}
            </p>
        </React.Fragment>
    );
};
