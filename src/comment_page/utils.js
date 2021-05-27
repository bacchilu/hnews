import React from 'react';
import useSWR from 'swr';

export const useHNItem = function (id) {
    return useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
};

export const CardText = function ({item}) {
    if (item['text'] !== undefined) return <em dangerouslySetInnerHTML={{__html: item['text']}}></em>;
    return (
        <p className="card-text text-truncate">
            <a href={item['url']} target="_blank">
                {item['url']}
            </a>
        </p>
    );
};
