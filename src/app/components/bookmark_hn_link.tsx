import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {IconButton, Tooltip} from '@mui/material';
import React from 'react';
import {useMemory} from '../hooks/use_memory';

export const BookmarkHNLink: React.FC<{itemId: number}> = function ({itemId}) {
    const {isBookmarked, toggleBookmarked} = useMemory(itemId);
    const label = isBookmarked ? 'Remove bookmark' : 'Add bookmark';

    return (
        <Tooltip title={label}>
            <IconButton
                aria-label={label}
                size="small"
                sx={{color: isBookmarked ? 'grey.400' : 'primary.main'}}
                onClick={toggleBookmarked}
            >
                <BookmarkBorderIcon fontSize="small" />
            </IconButton>
        </Tooltip>
    );
};
