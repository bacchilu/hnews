import React from 'react';

import {useHNItems} from '../hooks/hn_hook';
import {HNItem} from '../model/hn';
import {Col, DangerAlert, FloatEnd, Row, Separator, Spinner, Switch} from './bootstrap';
import {Card} from './card';

const CardList: React.FC<{hnItems: HNItem[]}> = function ({hnItems}) {
    return hnItems.map((item) => <Card key={item.objectID} item={item} />);
};

const CardListGroupedByDate: React.FC<{hnItems: HNItem[]; isReversed: boolean}> = function ({hnItems, isReversed}) {
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

export const Main: React.FC<{
    groupByDate: [boolean, (v: boolean) => void];
    limit: [boolean, (v: boolean) => void];
    reversed: [boolean, (v: boolean) => void];
}> = function ({groupByDate, limit, reversed}) {
    const {data: hnItems, error} = useHNItems();

    const [[byDate, setByDate], [limit30, setLimit30], [isReversed, setIsReversed]] = [groupByDate, limit, reversed];

    if (error !== undefined) return <DangerAlert message={error.message} />;
    if (hnItems === undefined) return <Spinner />;

    const items = limit30 ? hnItems.slice(0, 30) : hnItems;
    const items2 = isReversed ? [...items].reverse() : items;

    return (
        <>
            <Row>
                <Col span={4}>
                    <Row>
                        <Col>
                            <Switch title="By Date" value={byDate} onChange={setByDate} />
                        </Col>
                        <Col>
                            <Switch title="Reversed" value={isReversed} onChange={setIsReversed} />
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <FloatEnd>
                        <Switch title="Max 30" value={limit30} onChange={setLimit30} />
                    </FloatEnd>
                </Col>
            </Row>
            {byDate ? (
                <CardListGroupedByDate hnItems={items2} isReversed={isReversed} />
            ) : (
                <CardList hnItems={items2} />
            )}
        </>
    );
};
