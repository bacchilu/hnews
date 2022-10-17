import React from 'react';
import useSWR from 'swr';

import {VisibilityContainer} from './visibility_utils';

interface HNItem {
    by: string;
}

const fetcher = (k: string) => fetch(k).then((res) => res.json() as Promise<HNItem>);

const useHNItem = function (id: number) {
    return useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, fetcher, {dedupingInterval: 60000});
};

const Spinner = function () {
    return <div className="spinner-grow spinner-grow-sm me-5"></div>;
};

const UserBadge = function ({item, isItemSelected, setSelected}) {
    const {data, error} = useHNItem(item);

    if (error !== undefined) return <span className="badge rounded-pill bg-danger">error</span>;
    if (data === undefined) return <Spinner />;

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

    const items = kids.map(function (item: number) {
        const setSelected = function () {
            setSelectedKids({...getInitDict(), [item]: true});
            selectComment(item);
        };

        return (
            <VisibilityContainer key={item} spinner={<Spinner />}>
                <UserBadge item={item} isItemSelected={selectedKids[item]} setSelected={setSelected} />
            </VisibilityContainer>
        );
    });

    return (
        <div className="text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
            {items}
        </div>
    );
};
