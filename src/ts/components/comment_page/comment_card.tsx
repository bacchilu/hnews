import React from 'react';

import {relativeTime, toLocaleString} from '../../utils';
import {Badge} from '../badge';
import {Spinner} from '../bootstrap';
import CardTemplate from '../bootstrap/card';
import {useRefUserDetails} from '../user_details';
import {CommentersList} from './users';
import {CardText, HNItem, HNLink, useHNItem} from './utils';

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
                        <em className="float-end" title={toLocaleString(new Date(data.time * 1000))}>
                            {relativeTime(new Date(data.time * 1000))}
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

export const CommentCard: React.FC<{hnItem: HNItem}> = function ({hnItem}) {
    const userEl = useRefUserDetails(hnItem.by);
    const [childComment, setChildComment] = React.useState(null);

    return (
        <>
            <CardTemplate>
                <p>
                    <strong className="card-title">{hnItem.title}</strong>
                    <span className="float-end">
                        <Badge score={hnItem.score} />
                    </span>
                </p>
                <p className="card-subtitle mb-2 text-muted">
                    <span ref={userEl} style={{cursor: 'pointer'}}>
                        {hnItem.by}
                    </span>
                    <em className="float-end" title={toLocaleString(new Date(hnItem.time * 1000))}>
                        {relativeTime(new Date(hnItem.time * 1000))}
                    </em>
                </p>
                <CardText item={hnItem} />
                <p>
                    <span>&nbsp;</span>
                    <HNLink hnItem={hnItem} />
                </p>
                <CommentersList kids={hnItem.kids} selectComment={setChildComment} />
            </CardTemplate>
            {childComment !== null && <Comment item={childComment} />}
        </>
    );
};
