import React from 'react';
import { HNItem } from '../hooks/hn_hook';


export const Twitter = function ({ item }: { item: HNItem; }) {
    const twitterUrl = new URL('https://twitter.com/intent/tweet');
    twitterUrl.searchParams.append('text', item.title);
    twitterUrl.searchParams.append(
        'url',
        item.url !== null ? item.url : `https://news.ycombinator.com/item?id=${item.objectID}`
    );
    twitterUrl.searchParams.append('hashtags', 'hackernews');

    return (
        <a href={twitterUrl.href}>
            <i className="bi bi-twitter"></i>
        </a>
    );
};
