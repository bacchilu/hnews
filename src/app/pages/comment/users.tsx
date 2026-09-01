import {Box, Link, Typography} from '@mui/material';
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

    if (error !== undefined)
        return (
            <Typography color="error" component="span" variant="body2">
                error
            </Typography>
        );
    if (data === undefined) return <SpinnerGrow />;

    const onClick = function (e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        setSelected();
    };

    return !isItemSelected ? (
        <Link
            color="text.secondary"
            component="a"
            href={`https://news.ycombinator.com/item?id=${item}`}
            underline="hover"
            variant="body2"
            onClick={onClick}
        >
            {data.by}
        </Link>
    ) : (
        <Typography
            aria-current="true"
            color="primary"
            component="span"
            variant="body2"
            sx={{fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3}}
        >
            {data.by}
        </Typography>
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
        <Box
            sx={{
                alignItems: 'center',
                color: 'text.secondary',
                display: 'flex',
                gap: 1.5,
                overflowX: 'auto',
                whiteSpace: 'nowrap',
            }}
        >
            {items}
        </Box>
    );
};
