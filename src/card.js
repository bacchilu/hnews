import React from 'react';
import {Link} from 'react-router-dom';

import {Modal} from './libs/modal.js';
import {CommentsModal} from './comments';
import {relativeTime, toLocaleString, Badge, useRefUserDetails} from './utils.js';

const CardText = function ({item}) {
    if (item['story_text'] !== null) return <em dangerouslySetInnerHTML={{__html: item['story_text']}}></em>;
    return (
        <p className="card-text text-truncate">
            <a href={item['url']} target="_blank">
                {item['url']}
            </a>
        </p>
    );
};

export const Card = function ({item, inModal}) {
    const userEl = useRefUserDetails(item['author']);
    const [modalOpened, setModalOpened] = React.useState(false);

    const openComments = function (e) {
        if (inModal) return;
        e.preventDefault();
        setModalOpened(true);
    };

    return (
        <div className="card text-dark bg-light mb-1 shadow rounded">
            <Modal opened={modalOpened} setOpened={setModalOpened}>
                <CommentsModal item={item} />
            </Modal>
            <div className="card-body">
                <h5 className="card-title">{item['title']}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    <span ref={userEl}>{item['author']}</span>
                    <em className="float-end" title={toLocaleString(item['created_at'])}>
                        {relativeTime(item['created_at'])}
                    </em>
                </h6>
                <CardText item={item} />
                <p>
                    <Badge score={item['points']} />
                    <a
                        href={`https://news.ycombinator.com/item?id=${item['objectID']}`}
                        target="_blank"
                        className="card-link float-end"
                        onClick={openComments}
                    >
                        {item['num_comments']} Comments
                    </a>
                </p>
                <p>
                    <Link to={`/${item['objectID']}`} className="card-link float-end">
                        {item['num_comments']} Comments
                    </Link>
                </p>
            </div>
        </div>
    );
};
