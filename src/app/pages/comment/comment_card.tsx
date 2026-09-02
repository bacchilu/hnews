import {Alert, Box, Link, Typography} from '@mui/material';
import React from 'react';

import {Badge} from '../../components/badge';
import {CopyHNLink} from '../../components/copy_hn_link';
import {Spinner} from '../../components/mui';
import CardTemplate from '../../components/mui/card';
import {UserDetails} from '../../components/user_details';
import {useIsCopied} from '../../hooks/use_is_copied';
import {relativeTime, toLocaleString} from '../../utils';
import type {HNItem} from './hooks';
import {useHNItem} from './hooks';
import {CommentersList} from './users';
import {CardText, HNLink} from './utils';

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

const CommentFooter: React.FC<{
    controls?: React.ReactNode;
    count?: number;
    hnItem: HNItem;
    selectComment: (item: number) => void;
}> = function ({controls, count, hnItem, selectComment}) {
    const kids = hnItem.kids ?? [];

    return (
        <>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: controls === undefined ? 'flex-end' : 'space-between',
                }}
            >
                {controls}
                <HNLink hnItem={hnItem} count={count} />
            </Box>
            {kids.length > 0 && (
                <Box sx={{mt: 1}}>
                    <CommentersList kids={kids} selectComment={selectComment} />
                </Box>
            )}
        </>
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
                footer={<CommentFooter count={data.kids?.length ?? 0} hnItem={data} selectComment={setChildComment} />}
                isFresh={isFresh(data.time)}
                marker={null}
                selected
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
    const isCopied = useIsCopied(hnItem.id);

    React.useEffect(
        function () {
            console.log('Item copy status', {itemId: hnItem.id, isCopied});
        },
        [hnItem.id, isCopied]
    );

    return (
        <>
            <CardTemplate
                footer={
                    <CommentFooter
                        controls={
                            <Box sx={{alignItems: 'center', display: 'flex', gap: 0.5}}>
                                <Badge score={hnItem.score} />
                                <CopyHNLink itemId={hnItem.id} />
                            </Box>
                        }
                        hnItem={hnItem}
                        selectComment={setChildComment}
                    />
                }
                isFresh={isFresh(hnItem.time)}
                marker={null}
            >
                <Typography component="h1" variant="subtitle1" sx={{fontWeight: 600, lineHeight: 1.3}}>
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
