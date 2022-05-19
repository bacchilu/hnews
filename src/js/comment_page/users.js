import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useHNItem = function (id) {
    return useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, fetcher);
};

const UserBadge = function ({item, isItemSelected, setSelected}) {
    const {data, error} = useHNItem(item);

    if (error !== undefined) return <span className="badge rounded-pill bg-danger">error</span>;
    if (data === undefined)
        return (
            <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );

    const onClick = function (e) {
        e.preventDefault();
        setSelected();
    };

    return !isItemSelected ? (
        <a
            href={`https://news.ycombinator.com/item?id=${item}`}
            className="badge rounded-pill bg-light text-dark"
            onClick={onClick}
        >
            {data.by}
        </a>
    ) : (
        <span className="badge rounded-pill bg-secondary">{data.by}</span>
    );
};

export const CommentersList = function ({kids, selectComment}) {
    const getInitDict = function () {
        return kids.reduce(function (accumulator, currentValue) {
            return {...accumulator, [currentValue]: false};
        }, {});
    };
    const [selectedKids, setSelectedKids] = React.useState(getInitDict);

    const items = kids.map(function (item) {
        const setSelected = function () {
            setSelectedKids({...getInitDict(), [item]: true});
            selectComment(item);
        };

        return <UserBadge key={item} item={item} isItemSelected={selectedKids[item]} setSelected={setSelected} />;
    });

    return (
        <div className="text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
            {items}
        </div>
    );
};
