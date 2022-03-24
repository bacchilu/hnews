import React from 'react';
import {Link} from 'react-router-dom';

import {Modal} from '../libs/modal.js';
import {CommentsModal} from '../comments';

export const Comments = function ({item, inModal}) {
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
