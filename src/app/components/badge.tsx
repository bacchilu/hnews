import {Chip} from '@mui/material';
import React from 'react';

export const Badge: React.FC<{score: number}> = function ({score}) {
    return <Chip color="warning" label={score} size="small" />;
};
