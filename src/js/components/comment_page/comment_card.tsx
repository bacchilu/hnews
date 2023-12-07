import React from 'react';

import {relativeTime, toLocaleString} from '../../utils';
import {Badge} from '../badge';
import {Spinner} from '../spinner';
import {Twitter} from '../twitter';
import {useRefUserDetails} from '../user_details';
import {CommentersList} from './users';
import {CardText, HNLink, useHNItem} from './utils';

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

export const CommentCard = function ({data}) {
    const userEl = useRefUserDetails(data.by);
    const [childComment, setChildComment] = React.useState(null);

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
                        <span ref={userEl} style={{cursor: 'pointer'}}>
                            {data.by}
                        </span>
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
