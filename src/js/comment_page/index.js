import React from 'react';
import {useParams} from 'react-router-dom';

import {Spinner, Badge, useRefUserDetails, relativeTime, toLocaleString, Twitter} from '../utils';
import {CommentersList} from './users';
import {useHNItem, CardText, HNLink} from './utils';

const Comment = function ({item}) {
    const {data, error} = useHNItem(item);
    const userEl = useRefUserDetails(data?.by);
    const [childComment, setChildComment] = React.useState(null);
    React.useEffect(
        function () {
            setChildComment(null);
        },
        [item]
    );

    if (error !== undefined)
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    if (data === undefined) return <Spinner />;

    return (
        <React.Fragment>
            <div className="card text-dark bg-light mb-1 shadow rounded">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                        <span ref={userEl}>{data.by}</span>
                        <em className="float-end" title={toLocaleString(data.time * 1000)}>
                            {relativeTime(data.time * 1000)}
                        </em>
                    </h6>
                    <CardText item={data} />
                    <p>
                        <a
                            href={`https://news.ycombinator.com/item?id=${data['id']}`}
                            target="_blank"
                            className="float-end"
                        >
                            {data.kids !== undefined ? data.kids.length : 0} Comments
                        </a>
                    </p>
                    <CommentersList kids={data.kids || []} selectComment={setChildComment} />
                </div>
            </div>
            {childComment !== null && <Comment item={childComment} />}
        </React.Fragment>
    );
};

export const CommentPage = function () {
    const {commentId} = useParams();
    const {data, error} = useHNItem(commentId);
    const userEl = useRefUserDetails(data?.by);
    const [childComment, setChildComment] = React.useState(null);

    if (error !== undefined)
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    if (data === undefined) return <Spinner />;

    return (
        <>
            <div className="card text-dark bg-light mb-1 shadow rounded">
                <div className="card-body">
                    <p>
                        <strong className="card-title">{data.title}</strong>
                        <span className="float-end">
                            <Badge score={data.score} />
                        </span>
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        <span ref={userEl}>{data.by}</span>
                        <em className="float-end" title={toLocaleString(data.time * 1000)}>
                            {relativeTime(data.time * 1000)}
                        </em>
                    </p>
                    <CardText item={data} />
                    <p>
                        <Twitter item={data} />
                        <HNLink item={data} />
                    </p>
                    <CommentersList kids={data.kids} selectComment={setChildComment} />
                </div>
            </div>
            {childComment !== null && <Comment item={childComment} />}
        </>
    );
};
