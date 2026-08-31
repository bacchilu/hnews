import {AppBar, Box, Link, Toolbar, Typography} from '@mui/material';

import {version} from '../../../package.json';
import {useUser} from '../hooks/use_user';
import {LoginButton} from './login_button';

const Auth = function () {
    const user = useUser();

    return <LoginButton user={user} />;
};

export const NavBar = function () {
    return (
        <AppBar position="static" sx={{bgcolor: 'grey.900'}}>
            <Toolbar>
                <Link href="/hnews/" color="inherit" underline="none" sx={{flexGrow: 1}}>
                    <Typography component="span" variant="h6">
                        <Box component="strong" sx={{color: '#ff6600'}}>
                            HN
                        </Box>
                        ews <sub>{version}</sub>
                    </Typography>
                </Link>
                <Auth />
            </Toolbar>
        </AppBar>
    );
};
