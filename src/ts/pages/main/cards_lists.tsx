import React from 'react';

import {Separator} from '../../components/bootstrap';
import {Card} from '../../components/card';
import type {HNItem} from '../../model/entities/hn_item';

export const CardList: React.FC<{hnItems: HNItem[]}> = function ({hnItems}) {
    return hnItems.map((item) => <Card key={item.objectID} item={item} />);
};

export const CardListGroupedByDate: React.FC<{hnItems: HNItem[]; isReversed: boolean}> = function ({
    hnItems,
    isReversed,
}) {
    const now = new Date();
    const filterLastNDays = function (hnItem: HNItem, days: number) {
        const DAY = 24 * 60 * 60 * 1000;
        const milliseconds = now.getTime() - hnItem.created_at.getTime();
        return milliseconds <= days * DAY && milliseconds > (days - 1) * DAY;
    };

    const groups = isReversed ? [1, 2, 3, 4, 5, 6, 7] : [7, 6, 5, 4, 3, 2, 1];
    return groups.map((day, index, array) => {
        const isLast = index + 1 === array.length;
        const filteredHNItems = hnItems.filter((hnItem) => filterLastNDays(hnItem, day));
        return (
            <React.Fragment key={day}>
                <CardList hnItems={filteredHNItems} />
                <Separator show={!isLast} />
            </React.Fragment>
        );
    });
};
