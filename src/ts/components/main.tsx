import React from 'react';

import {useHNItems} from '../hooks/hn_hook';
import {HNItem} from '../model/hn';
import {Col, DangerAlert, FloatEnd, Row, Separator, Spinner, Switch} from './bootstrap';
import {Card} from './card';

const CardList: React.FC<{hnItems: HNItem[]}> = function ({hnItems}) {
    return hnItems.map((item) => <Card key={item.objectID} item={item} />);
};

const CardListGroupedByDate: React.FC<{hnItems: HNItem[]}> = function ({hnItems}) {
    const now = new Date();
    const filterLastNDays = function (hnItem: HNItem, days: number) {
        const DAY = 24 * 60 * 60 * 1000;
        const milliseconds = now.getTime() - hnItem.created_at.getTime();
        return milliseconds <= days * DAY && milliseconds > (days - 1) * DAY;
    };

    return [7, 6, 5, 4, 3, 2, 1].map((day, index, array) => {
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

export const Main: React.FC<{groupByDate: [boolean, (v: boolean) => void]; limit: [boolean, (v: boolean) => void]}> =
    function ({groupByDate, limit}) {
        const [hnItems, error] = useHNItems();

        const [[byDate, setByDate], [limit30, setLimit30]] = [groupByDate, limit];

        if (error !== undefined) return <DangerAlert message={error.message} />;
        if (hnItems === undefined) return <Spinner />;

        const items = limit30 ? hnItems.slice(0, 30) : hnItems;

        return (
            <>
                <Row>
                    <Col>
                        <Switch title="Group by date" value={byDate} onChange={setByDate} />
                    </Col>
                    <Col>
                        <FloatEnd>
                            <Switch title="Max 30 items" value={limit30} onChange={setLimit30} />
                        </FloatEnd>
                    </Col>
                </Row>
                {byDate ? <CardListGroupedByDate hnItems={items} /> : <CardList hnItems={items} />}
            </>
        );
    };
