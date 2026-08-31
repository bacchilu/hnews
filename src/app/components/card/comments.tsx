import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import {Chip} from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';

import type {HNItem} from '../../hooks/entities';

export const Comments: React.FC<{item: HNItem}> = function ({item}) {
    const count = item.num_comments ?? 0;

    return (
        <Chip
            aria-label={`${count} comments`}
            clickable
            color="primary"
            component={Link}
            disabled={item.num_comments === null}
            icon={<ForumOutlinedIcon />}
            label={count.toLocaleString()}
            size="small"
            sx={{fontVariantNumeric: 'tabular-nums', '& .MuiChip-label': {fontWeight: 600}}}
            target="_blank"
            title={`${count.toLocaleString()} comments`}
            to={`/${item.objectID}`}
            variant="outlined"
        />
    );
};
