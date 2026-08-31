import {Chip} from '@mui/material';
import React from 'react';

const COLOR = {
    ERROR: 'error',
    WARNING: 'warning',
    SUCCESS: 'success',
    PRIMARY: 'primary',
    INFO: 'info',
    SECONDARY: 'secondary',
} as const;

export const Badge: React.FC<{score: number}> = function ({score}) {
    const getColor = function (points: number) {
        if (points >= 3200) return COLOR.ERROR;
        if (points >= 1600) return COLOR.WARNING;
        if (points >= 800) return COLOR.SUCCESS;
        if (points >= 400) return COLOR.PRIMARY;
        if (points >= 200) return COLOR.INFO;
        return COLOR.SECONDARY;
    };

    return <Chip color={getColor(score)} label={score} size="small" />;
};
