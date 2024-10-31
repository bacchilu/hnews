import React from 'react';

import {HNItem} from '../model/hn';

export const Twitter: React.FC<{hnItem: HNItem}> = function ({hnItem}) {
    const twitterUrl = new URL('https://twitter.com/intent/tweet');
    twitterUrl.searchParams.append('text', hnItem.title);
    twitterUrl.searchParams.append(
        'url',
        hnItem.url !== null ? hnItem.url : `https://news.ycombinator.com/item?id=${hnItem.objectID}`
    );
    twitterUrl.searchParams.append('hashtags', 'hackernews');

    return (
        <a href={twitterUrl.href}>
            <i className="bi bi-twitter"></i>
        </a>
    );
};
