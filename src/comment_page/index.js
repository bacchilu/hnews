import React, {isValidElement} from 'react';
import {useParams} from 'react-router-dom';
import useSWR from 'swr';

import {Spinner, Badge, useRefUserDetails, relativeTime, toLocaleString} from '../utils.js';

const useHNItem = function (id) {
    return useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
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

const UserBadge = function ({item, isItemSelected, setSelected}) {
    const {data, error} = useHNItem(item);

    if (error !== undefined) return <span className="badge rounded-pill bg-danger">error</span>;
    if (data === undefined)
        return (
            <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );

    const onClick = function (e) {
        e.preventDefault();
        setSelected();
    };

    return !isItemSelected ? (
        <a
            href={`https://news.ycombinator.com/item?id=${item}`}
            className="badge rounded-pill bg-light text-dark"
            onClick={onClick}
        >
            {data.by}
        </a>
    ) : (
        <span className="badge rounded-pill bg-secondary">{data.by}</span>
    );
};

const CommentersList = function ({kids}) {
    const getInitDict = function () {
        return kids.reduce(function (accumulator, currentValue) {
            return {...accumulator, [currentValue]: false};
        }, {});
    };
    const [selectedKids, setSelectedKids] = React.useState(getInitDict);

    const items = kids.map(function (item) {
        const setSelected = function () {
            setSelectedKids({...getInitDict(), [item]: true});
        };

        return <UserBadge key={item} item={item} isItemSelected={selectedKids[item]} setSelected={setSelected} />;
    });

    return (
        <div className="text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
            {items}
        </div>
    );
};

export const CommentPage = function (props) {
    const {commentId} = useParams();
    const {data, error} = useHNItem(commentId);
    const userEl = useRefUserDetails(data?.by);

    if (error !== undefined)
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    if (data === undefined) return <Spinner />;

    return (
        <div className="card text-dark bg-light mb-1 shadow rounded">
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    <span ref={userEl}>{data.by}</span>
                    <em className="float-end" title={toLocaleString(data.time * 1000)}>
                        {relativeTime(data.time * 1000)}
                    </em>
                </h6>
                <CardText item={data} />
                <p>
                    <Badge score={data['score']} />
                    <a
                        href={`https://news.ycombinator.com/item?id=${data['id']}`}
                        target="_blank"
                        className="float-end"
                    >
                        {data['descendants']} Comments
                    </a>
                </p>
                <CommentersList kids={data.kids} />
            </div>
        </div>
    );
};