import React from 'react';
import {Link} from 'react-router-dom';

import {Modal} from './libs/modal.js';
import {CommentsModal} from './comments';
import {relativeTime, toLocaleString, Badge, useRefUserDetails} from './utils.js';

const Url = function ({item}) {
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

const CardText = function ({item}) {
    if (item.story_text !== null) return <em dangerouslySetInnerHTML={{__html: item.story_text}}></em>;

    return (
        <p className="card-text text-truncate">
            <a href={item.url} target="_blank">
                <Url item={item} />
            </a>
        </p>
    );
};

const Comments = function ({item, inModal}) {
    const [modalOpened, setModalOpened] = React.useState(false);

    const openComments = function (e) {
        if (inModal) return;
        e.preventDefault();
        setModalOpened(true);
    };

    return (
        <>
            <Modal opened={modalOpened} setOpened={setModalOpened}>
                <CommentsModal item={item} />
            </Modal>
            <a
                href={`https://news.ycombinator.com/item?id=${item.objectID}`}
                className="btn btn-secondary btn-sm position-relative me-4"
                target="_blank"
                onClick={openComments}
            >
                <i className="bi bi-people"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {item.num_comments}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </a>
            <Link to={`/${item.objectID}`} className="btn btn-primary btn-sm position-relative me-4">
                <i className="bi bi-people-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {item.num_comments}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </Link>
        </>
    );
};

export const Card = function ({item, inModal}) {
    console.log(item);
    const userEl = useRefUserDetails(item.author);

    return (
        <div className="card text-dark bg-light mb-1 shadow rounded">
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    <span ref={userEl}>{item.author}</span>
                    <em className="float-end" title={toLocaleString(item.created_at)}>
                        {relativeTime(item.created_at)}
                    </em>
                </h6>
                <CardText item={item} />
                <a
                    className="twitter-share-button"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        item.title
                    )}&url=${encodeURIComponent(
                        item.url !== null ? item.url : 'https://news.ycombinator.com/item?id=' + item.objectID
                    )}&hashtags=hackernews`}
                >
                    Tweet
                </a>
                <p>
                    <Badge score={item.points} />
                    <span className="float-end">
                        <Comments item={item} inModal={inModal} />
                    </span>
                </p>
            </div>
        </div>
    );
};
