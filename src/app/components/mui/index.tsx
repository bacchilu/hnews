import {
    Alert,
    Box,
    CircularProgress,
    Divider,
    FormControlLabel,
    Grid,
    Container as MuiContainer,
    Typography,
} from '@mui/material';
import SwitchControl from '@mui/material/Switch';
import React from 'react';

export const Container: React.FC<{children: React.ReactNode}> = function ({children}) {
    return <MuiContainer sx={{pt: 3}}>{children}</MuiContainer>;
};

export const Row: React.FC<{children: React.ReactNode}> = function ({children}) {
    return (
        <Grid container spacing={2}>
            {children}
        </Grid>
    );
};

export const Col: React.FC<{children: React.ReactNode; span?: number}> = function ({children, span}) {
    return <Grid size={span ?? 'grow'}>{children}</Grid>;
};

export const FloatEnd: React.FC<{children: React.ReactNode}> = function ({children}) {
    return <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>{children}</Box>;
};

export const Switch: React.FC<{title: string; value: boolean; onChange: (value: boolean) => void}> = function ({
    title,
    value,
    onChange,
}) {
    return (
        <FormControlLabel
            control={
                <SwitchControl checked={value} size="small" onChange={(event) => onChange(event.target.checked)} />
            }
            label={<Typography variant="body2">{title}</Typography>}
            sx={{m: 0}}
        />
    );
};

export const DangerAlert: React.FC<{message: string}> = function ({message}) {
    return <Alert severity="error">{message}</Alert>;
};

export const Spinner = function () {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress size="3rem" />
        </Box>
    );
};

export const SpinnerGrow = function () {
    return <CircularProgress size="1.25rem" sx={{mr: 5}} />;
};

export const Separator: React.FC<{show?: boolean}> = function ({show = true}) {
    return show ? <Divider sx={{my: 4}} /> : null;
};
