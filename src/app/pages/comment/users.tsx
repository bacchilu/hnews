import {Box, Chip} from '@mui/material';
import React from 'react';

import {SpinnerGrow} from '../../components/mui';
import {useHNItem2} from './hooks';
import {VisibilityContainer} from './visibility_utils';

const UserBadge: React.FC<{item: number; isItemSelected: boolean; setSelected: () => void}> = function ({
    item,
    isItemSelected,
    setSelected,
}) {
    const {data, error} = useHNItem2(item);

    if (error !== undefined) return <Chip color="error" label="error" size="small" />;
    if (data === undefined) return <SpinnerGrow />;

    const onClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        setSelected();
    };

    return !isItemSelected ? (
        <Chip
            clickable
            component="a"
            href={`https://news.ycombinator.com/item?id=${item}`}
            label={data.by}
            size="small"
            sx={{mr: 0.5}}
            onClick={onClick}
        />
    ) : (
        <Chip color="default" label={data.by} size="small" sx={{mr: 0.5}} />
    );
};

export const CommentersList: React.FC<{kids: number[]; selectComment: (item: number) => void}> = function ({
    kids,
    selectComment,
}) {
    const [selectedKid, setSelectedKid] = React.useState<number | null>(null);

    const items = kids.map(function (item: number) {
        const setSelected = function () {
            setSelectedKid(item);
            selectComment(item);
        };

        return (
            <VisibilityContainer key={item} spinner={<SpinnerGrow />}>
                <UserBadge item={item} isItemSelected={item === selectedKid} setSelected={setSelected} />
            </VisibilityContainer>
        );
    });

    return (
        <Box sx={{color: 'text.secondary', overflowX: 'auto', whiteSpace: 'nowrap'}}>
            {items}
        </Box>
    );
};
