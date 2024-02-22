import React from 'react';

import {useHNItems} from '../hooks/hn_hook';
import {HNItem} from '../model/hn';
import {Card} from './card';
import {Spinner} from './spinner';

const ErrorAlert: React.FC<{message: string}> = function ({message}) {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    );
};

const CardList: React.FC<{hnItems: HNItem[]}> = function ({hnItems}) {
    return hnItems.map((item) => <Card key={item.objectID} item={item} />);
};

const CardList2: React.FC<{hnItems: HNItem[]}> = function ({hnItems}) {
    const now = new Date();
    const filterLastNDays = function (hnItem: HNItem, days: number) {
        const DAY = 24 * 60 * 60 * 1000;
        const milliseconds = now.getTime() - hnItem.created_at.getTime();
        return milliseconds <= days * DAY && milliseconds > (days - 1) * DAY;
    };

    return [1, 2, 3, 4, 5, 6, 7].map((day, index, array) => {
        const isLast = index + 1 === array.length;
        const filteredHNItems = hnItems.filter((hnItem) => filterLastNDays(hnItem, day));
        return (
            <div key={day}>
                <CardList hnItems={filteredHNItems} />
                {!isLast && <hr style={{margin: '2rem'}} />}
            </div>
        );
    });
};

export const Main: React.FC<{recents: boolean; setRecents: (v: boolean) => void}> = function ({recents, setRecents}) {
    const {data: hnItems, error} = useHNItems(recents ? 1 : 7);

    const changeRecents = function (e: React.ChangeEvent<HTMLInputElement>) {
        setRecents(e.target.checked);
    };

    if (error !== undefined) return <ErrorAlert message={error.message} />;
    if (hnItems === undefined) return <Spinner />;

    const items = <CardList2 hnItems={hnItems} />;
    return (
        <>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={recents}
                    onChange={changeRecents}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Recents only
                </label>
            </div>
            {items}
        </>
    );
};
