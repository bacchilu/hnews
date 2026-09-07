import {Stack} from '@mui/material';
import React from 'react';

import {getHNItems} from '../../api/hn';
import {DangerAlert, Spinner, Switch} from '../../components/mui';
import {useHNItems} from '../../hooks/hn_hook';
import {useMemoryItemIds} from '../../hooks/use_memory';
import {CardList, CardListGroupedByDate} from './cards_lists';

export const Main: React.FC<{
    groupByDate: [boolean, (v: boolean) => void];
    reversed: [boolean, (v: boolean) => void];
    showUnread: [boolean, (v: boolean) => void];
}> = function ({groupByDate, reversed, showUnread}) {
    const {data, error} = useHNItems(getHNItems);
    const itemIds = React.useMemo(() => data?.map((item) => item.objectID) ?? [], [data]);
    const copiedItemIds = useMemoryItemIds(itemIds, 'copied');

    const [[byDate, setByDate], [isReversed, setIsReversed], [showUnreadOnly, setShowUnreadOnly]] = [
        groupByDate,
        reversed,
        showUnread,
    ];

    if (error !== undefined) return <DangerAlert message={error.message} />;
    if (data === undefined) return <Spinner />;

    const visibleItems = showUnreadOnly ? data.filter((item) => !copiedItemIds.has(item.objectID)) : data;
    const hnItems = isReversed ? [...visibleItems].reverse() : visibleItems;

    return (
        <>
            <Stack direction="row" spacing={2} sx={{alignItems: 'center', flexWrap: 'wrap', mb: 2, rowGap: 0.5}}>
                <Switch title="By Date" value={byDate} onChange={setByDate} />
                <Switch title="Reversed" value={isReversed} onChange={setIsReversed} />
                <Switch title="Unread" value={showUnreadOnly} onChange={setShowUnreadOnly} />
            </Stack>
            {byDate ? (
                <CardListGroupedByDate hnItems={hnItems} isReversed={isReversed} />
            ) : (
                <CardList hnItems={hnItems} />
            )}
        </>
    );
};
