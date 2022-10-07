import React from 'react';
import {useIntersectionObserver} from 'react-intersection-observer-hook';
import useSWR from 'swr';

export const useVisible = function () {
    const [ref, {entry}] = useIntersectionObserver();
    return {ref, isVisible: entry && entry.isIntersecting};
};

interface HNItem {
    by: string;
}

const fetcher = (k: string) => fetch(k).then((res) => res.json() as Promise<HNItem>);

const useHNItem = function (id: number) {
    return useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, fetcher);
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

const UserBadgeContainer = function ({item, isItemSelected, setSelected}) {
    const {ref, isVisible} = useVisible();

    const visible = isVisible !== undefined && isVisible;

    return (
        <span ref={ref}>
            {!visible && <Spinner />}
            {visible && <UserBadge item={item} isItemSelected={isItemSelected} setSelected={setSelected} />}
        </span>
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
            <UserBadgeContainer key={item} item={item} isItemSelected={selectedKids[item]} setSelected={setSelected} />
        );
    });

    return (
        <div className="text-muted" style={{overflowX: 'auto', whiteSpace: 'nowrap'}}>
            {items}
        </div>
    );
};
