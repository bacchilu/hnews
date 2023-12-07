import React from 'react';
import {useParams} from 'react-router-dom';

import {Spinner} from '../spinner';
import {CommentCard} from './comment_card';
import {useHNItem} from './utils';

export const CommentPage = function () {
    const {commentId} = useParams();
    const {data, error} = useHNItem(commentId!);

    if (error !== undefined)
        return (
            <div className="alert alert-danger" role="alert">
                {error.message}
            </div>
        );
    if (data === undefined) return <Spinner />;

    return <CommentCard data={data} />;
};
