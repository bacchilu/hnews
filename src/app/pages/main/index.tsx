import React from 'react';

import {Col, DangerAlert, FloatEnd, Row, Spinner, Switch} from '../../components/bootstrap';
import {useHNItems} from '../../hooks/hn_hook';
import {getHNItems} from '../../model/hn';
import {CardList, CardListGroupedByDate} from './cards_lists';

export const Main: React.FC<{
    groupByDate: [boolean, (v: boolean) => void];
    limit: [boolean, (v: boolean) => void];
    reversed: [boolean, (v: boolean) => void];
}> = function ({groupByDate, limit, reversed}) {
    const {data, error} = useHNItems(getHNItems);

    const [[byDate, setByDate], [limit30, setLimit30], [isReversed, setIsReversed]] = [groupByDate, limit, reversed];

    if (error !== undefined) return <DangerAlert message={error.message} />;
    if (data === undefined) return <Spinner />;

    const items = limit30 ? data.slice(0, 30) : data;
    const hnItems = isReversed ? [...items].reverse() : items;

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
                <CardListGroupedByDate hnItems={hnItems} isReversed={isReversed} />
            ) : (
                <CardList hnItems={hnItems} />
            )}
        </>
    );
};
