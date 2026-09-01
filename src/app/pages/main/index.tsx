import {Stack} from '@mui/material';
import React from 'react';

import {getHNItems} from '../../api/hn';
import {DangerAlert, Spinner, Switch} from '../../components/mui';
import {useHNItems} from '../../hooks/hn_hook';
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
            <Stack direction="row" spacing={2} sx={{alignItems: 'center', flexWrap: 'wrap', mb: 2, rowGap: 0.5}}>
                <Switch title="By Date" value={byDate} onChange={setByDate} />
                <Switch title="Reversed" value={isReversed} onChange={setIsReversed} />
                <Switch title="Max 30" value={limit30} onChange={setLimit30} />
            </Stack>
            {byDate ? (
                <CardListGroupedByDate hnItems={hnItems} isReversed={isReversed} />
            ) : (
                <CardList hnItems={hnItems} />
            )}
        </>
    );
};
