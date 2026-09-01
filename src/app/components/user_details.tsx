import {Box, CircularProgress, Tooltip, Typography} from '@mui/material';
import React from 'react';
import * as z from 'zod/mini';

import {relativeTime, toLocaleString} from '../utils';

const UserDetailsParser = z.object({
    created: z.pipe(
        z.int().check(z.positive()),
        z.transform((v) => new Date(v * 1000))
    ),
    about: z.optional(z.string()),
});
type UserDetailsTypeInput = z.input<typeof UserDetailsParser>;
type UserDetailsType = z.infer<typeof UserDetailsParser>;

const UserDetailsStore = (function () {
    const cache = {} as {[id: string]: UserDetailsType};
    return {
        get: async function (id: string) {
            if (cache[id] !== undefined) return cache[id];
            const res = (await (
                await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
            ).json()) as UserDetailsTypeInput;
            cache[id] = UserDetailsParser.parse(res);
            return cache[id];
        },
    };
})();

export const UserDetails: React.FC<{user: string | undefined; children: React.ReactElement}> = function ({
    user,
    children,
}) {
    const [details, setDetails] = React.useState<{user: string; value: UserDetailsType} | null>(null);

    const handleOpen = function () {
        if (user === undefined || details?.user === user) return;

        void UserDetailsStore.get(user).then((value) => setDetails({user, value}));
    };

    const value = details !== null && details.user === user ? details.value : null;
    const content =
        value === null ? (
            <CircularProgress color="inherit" size="1rem" />
        ) : (
            <Box sx={{maxWidth: 320}}>
                <Typography component="div" variant="caption">
                    <em title={toLocaleString(value.created)}>{relativeTime(value.created)}</em>
                </Typography>
                {value.about !== undefined && (
                    <Typography
                        component="div"
                        variant="body2"
                        sx={{mt: 1}}
                        dangerouslySetInnerHTML={{__html: value.about}}
                    />
                )}
            </Box>
        );

    return (
        <Tooltip arrow disableHoverListener={user === undefined} title={content} onOpen={handleOpen}>
            {children}
        </Tooltip>
    );
};
