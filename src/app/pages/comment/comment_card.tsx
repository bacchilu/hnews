import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import {Alert, Box, Link, Stack, Typography} from '@mui/material';
import React from 'react';

import {relativeTime, toLocaleString} from '../../utils';
import {Badge} from '../../components/badge';
import {Spinner} from '../../components/mui';
import CardTemplate from '../../components/mui/card';
import {UserDetails} from '../../components/user_details';
import {CommentersList} from './users';
import {CardText, HNLink} from './utils';
import type {HNItem} from './hooks';
import {useHNItem} from './hooks';

const isFresh = function (time: number) {
    return new Date().getTime() - time * 1000 <= 1000 * 60 * 60 * 25;
};

const getDomain = function (url: string | undefined) {
    if (url === undefined) return null;

    try {
        return new URL(url).hostname.replace(/^www\./, '');
    } catch {
        return url;
    }
};

const CommentMarker = function () {
    return (
        <Box
            sx={{
                alignItems: 'center',
                bgcolor: 'action.selected',
                borderRadius: '50%',
                color: 'text.secondary',
                display: 'flex',
                height: 32,
                justifyContent: 'center',
                width: 32,
            }}
        >
            <CommentOutlinedIcon fontSize="small" />
        </Box>
    );
};

const Metadata: React.FC<{by: string; time: number; domain?: string | null}> = function ({by, time, domain}) {
    const date = new Date(time * 1000);

    return (
        <Box
            sx={{
                alignItems: 'center',
                color: 'text.secondary',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0.75,
                mt: 0.25,
            }}
        >
            {domain !== undefined && domain !== null && (
                <Typography component="span" variant="caption">
                    {domain}
                </Typography>
            )}
            {domain !== undefined && domain !== null && <Typography variant="caption">·</Typography>}
            <UserDetails user={by}>
                <Typography component="span" variant="caption" sx={{cursor: 'pointer'}}>
                    {by}
                </Typography>
            </UserDetails>
            <Typography variant="caption">·</Typography>
            <Typography component="time" variant="caption" title={toLocaleString(date)}>
                {relativeTime(date)}
            </Typography>
        </Box>
    );
};

const Comment: React.FC<{item: number}> = function ({item}) {
    const {data, error} = useHNItem(item);
    const [childComment, setChildComment] = React.useState<number | null>(null);

    if (error !== undefined) return <Alert severity="error">{error.message}</Alert>;
    if (data === undefined) return <Spinner />;

    return (
        <React.Fragment>
            <CardTemplate
                footer={
                    data.kids?.length > 0 ? (
                        <CommentersList kids={data.kids} selectComment={setChildComment} />
                    ) : undefined
                }
                isFresh={isFresh(data.time)}
                marker={
                    <Stack spacing={0.75} sx={{alignItems: 'center'}}>
                        <CommentMarker />
                        <HNLink hnItem={data} count={data.kids?.length ?? 0} />
                    </Stack>
                }
            >
                <Metadata by={data.by} time={data.time} />
                <CardText item={data} />
            </CardTemplate>
            {childComment !== null && <Comment key={childComment} item={childComment} />}
        </React.Fragment>
    );
};

export const CommentCard: React.FC<{hnItem: HNItem}> = function ({hnItem}) {
    const [childComment, setChildComment] = React.useState<number | null>(null);
    const domain = getDomain(hnItem.url);

    return (
        <>
            <CardTemplate
                footer={
                    hnItem.kids?.length > 0 ? (
                        <CommentersList kids={hnItem.kids} selectComment={setChildComment} />
                    ) : undefined
                }
                isFresh={isFresh(hnItem.time)}
                marker={
                    <Stack spacing={0.75} sx={{alignItems: 'center'}}>
                        <Badge score={hnItem.score} />
                        <HNLink hnItem={hnItem} />
                    </Stack>
                }
            >
                <Typography component="h1" variant="subtitle1" sx={{fontWeight: 600, lineHeight: 1.3}} noWrap>
                    {hnItem.url === undefined ? (
                        hnItem.title
                    ) : (
                        <Link color="text.primary" href={hnItem.url} target="_blank" underline="hover">
                            {hnItem.title}
                        </Link>
                    )}
                </Typography>
                <Metadata by={hnItem.by} domain={domain} time={hnItem.time} />
                <CardText item={hnItem} />
            </CardTemplate>
            {childComment !== null && <Comment key={childComment} item={childComment} />}
        </>
    );
};
