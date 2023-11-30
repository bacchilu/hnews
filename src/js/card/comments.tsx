import React from 'react';
import {Link} from 'react-router-dom';

import {HNItem} from '../hn_hook';

const LinkTo = function ({to, disabled, children}: {to: string; disabled: boolean; children: JSX.Element}) {
    return disabled ? (
        <Link to={`/${to}`} style={{pointerEvents: 'none'}}>
            {children}
        </Link>
    ) : (
        <Link to={to}>{children}</Link>
    );
};

export const Comments = function ({item}: {item: HNItem}) {
    return (
        <LinkTo to={`/${item.objectID}`} disabled={item.num_comments === null}>
            <span className="btn btn-primary btn-sm position-relative me-4">
                <i className="bi bi-people-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {item.num_comments}
                </span>
            </span>
        </LinkTo>
    );
};
