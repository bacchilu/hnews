import {Box, CircularProgress} from '@mui/material';

export const Spinner = function () {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress size="3rem" />
        </Box>
    );
};
