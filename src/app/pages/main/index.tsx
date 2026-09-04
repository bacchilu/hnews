import {Stack} from '@mui/material';
import React from 'react';

import {getHNItems} from '../../api/hn';
import {DangerAlert, Spinner, Switch} from '../../components/mui';
import {useHNItems} from '../../hooks/hn_hook';
import {CardList, CardListGroupedByDate} from './cards_lists';

export const Main: React.FC<{
    groupByDate: [boolean, (v: boolean) => void];
    reversed: [boolean, (v: boolean) => void];
}> = function ({groupByDate, reversed}) {
    const {data, error} = useHNItems(getHNItems);

    const [[byDate, setByDate], [isReversed, setIsReversed]] = [groupByDate, reversed];

    if (error !== undefined) return <DangerAlert message={error.message} />;
    if (data === undefined) return <Spinner />;

    const hnItems = isReversed ? [...data].reverse() : data;

    return (
        <>
            <Stack direction="row" spacing={2} sx={{alignItems: 'center', flexWrap: 'wrap', mb: 2, rowGap: 0.5}}>
                <Switch title="By Date" value={byDate} onChange={setByDate} />
                <Switch title="Reversed" value={isReversed} onChange={setIsReversed} />
            </Stack>
            {byDate ? (
                <CardListGroupedByDate hnItems={hnItems} isReversed={isReversed} />
            ) : (
                <CardList hnItems={hnItems} />
            )}
        </>
    );
};
