import {Paper, Stack} from '@mui/material';
import React from 'react';

import {DangerAlert, Spinner, Switch} from '../../components/mui';
import {useHNItems} from '../../hooks/hn_hook';
import {getHNItems} from '../../api/hn';
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
            <Paper variant="outlined" sx={{mb: 2, px: 2, py: 1}}>
                <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 0, sm: 2}}>
                    <Switch title="By Date" value={byDate} onChange={setByDate} />
                    <Switch title="Reversed" value={isReversed} onChange={setIsReversed} />
                    <Switch title="Max 30" value={limit30} onChange={setLimit30} />
                </Stack>
            </Paper>
            {byDate ? (
                <CardListGroupedByDate hnItems={hnItems} isReversed={isReversed} />
            ) : (
                <CardList hnItems={hnItems} />
            )}
        </>
    );
};
