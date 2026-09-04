import {Box} from '@mui/material';
import React from 'react';

const Card: React.FC<{
    children: React.ReactNode;
    footer?: React.ReactNode;
    isFresh?: boolean;
    marker: React.ReactNode;
    selected?: boolean;
}> = function ({children, footer, isFresh = false, marker, selected = false}) {
    const hasMarker = marker !== null && marker !== undefined;
    const contentColumn = hasMarker ? 2 : 1;

    return (
        <Box
            component="article"
            sx={{
                alignItems: 'start',
                bgcolor: selected ? 'grey.50' : '#f6f6ef',
                borderLeftColor: selected ? 'primary.main' : isFresh ? 'success.main' : 'divider',
                borderLeftStyle: 'solid',
                borderLeftWidth: selected || isFresh ? 4 : 2,
                display: 'grid',
                gap: {xs: 1, sm: 2},
                gridTemplateColumns: hasMarker ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr)',
                mb: 1,
                px: 2,
                py: 1.5,
                transition: (theme) => theme.transitions.create('background-color'),
                '&:hover': {bgcolor: selected ? 'grey.50' : 'action.hover'},
            }}
        >
            {hasMarker && <Box sx={{gridColumn: 1, gridRow: 1, pt: 0.25}}>{marker}</Box>}
            <Box sx={{gridColumn: contentColumn, gridRow: 1, minWidth: 0}}>{children}</Box>
            {footer !== undefined && <Box sx={{gridColumn: contentColumn, gridRow: 2, minWidth: 0}}>{footer}</Box>}
        </Box>
    );
};

export default Card;
