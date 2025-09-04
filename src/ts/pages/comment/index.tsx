import {useParams} from 'react-router-dom';

import {DangerAlert, Spinner} from '../../components/bootstrap';
import {CommentCard} from './comment_card';
import {useHNItem} from './utils';

export const CommentPage = function () {
    const {commentId} = useParams();
    const {data, error} = useHNItem(commentId!);

    if (error !== undefined) return <DangerAlert message={error.message} />;
    if (data === undefined) return <Spinner />;

    return <CommentCard hnItem={data} />;
};
