import {Box, Paper} from '@mui/material';
import React from 'react';

const Card: React.FC<{
    children: React.ReactNode;
    footer?: React.ReactNode;
    isFresh?: boolean;
    marker: React.ReactNode;
    selected?: boolean;
}> = function ({children, footer, isFresh = false, marker, selected = false}) {
    return (
        <Paper
            component="article"
            variant="outlined"
            sx={{
                alignItems: 'start',
                bgcolor: selected ? 'action.selected' : undefined,
                borderLeftColor: selected ? 'primary.main' : isFresh ? 'success.main' : 'divider',
                borderLeftWidth: selected || isFresh ? 4 : 1,
                display: 'grid',
                gap: {xs: 1, sm: 2},
                gridTemplateColumns: 'auto minmax(0, 1fr)',
                mb: 1,
                px: 2,
                py: 1.5,
                transition: (theme) => theme.transitions.create('background-color'),
                '&:hover': {bgcolor: selected ? 'action.selected' : 'action.hover'},
            }}
        >
            <Box sx={{gridColumn: 1, gridRow: 1, pt: 0.25}}>{marker}</Box>
            <Box sx={{gridColumn: 2, gridRow: 1, minWidth: 0}}>{children}</Box>
            {footer !== undefined && (
                <Box sx={{gridColumn: 2, gridRow: 2, minWidth: 0}}>
                    {footer}
                </Box>
            )}
        </Paper>
    );
};

export default Card;
