import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import {Chip, Typography} from '@mui/material';
import React from 'react';

import type {HNItem} from './hooks';

export const CardText: React.FC<{item: HNItem}> = function ({item}) {
    if (item.text !== undefined)
        return (
            <Typography
                color="text.secondary"
                component="div"
                variant="body2"
                sx={{lineHeight: 1.6, mt: 1, overflowWrap: 'anywhere', '& p': {mb: 1, mt: 0}}}
                dangerouslySetInnerHTML={{__html: item.text}}
            />
        );
    return null;
};

export const HNLink: React.FC<{hnItem: HNItem; count?: number}> = function ({hnItem, count = hnItem.descendants}) {
    const commentCount = count ?? 0;

    return (
        <Chip
            aria-label={`${commentCount} comments`}
            clickable
            color="primary"
            component="a"
            href={`https://news.ycombinator.com/item?id=${hnItem.id}`}
            icon={<ForumOutlinedIcon />}
            label={commentCount.toLocaleString()}
            size="small"
            sx={{fontVariantNumeric: 'tabular-nums', '& .MuiChip-label': {fontWeight: 600}}}
            target="_blank"
            title={`${commentCount.toLocaleString()} comments`}
            variant="outlined"
        />
    );
};
