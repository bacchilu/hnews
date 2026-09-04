import {Box, Link, ListItem, Typography} from '@mui/material';
import React from 'react';

import type {HNItem} from '../../hooks/entities';
import {relativeTime, toLocaleString} from '../../utils';
import {Badge} from '../badge';
import {BookmarkHNLink} from '../bookmark_hn_link';
import {CopyHNLink} from '../copy_hn_link';
import {UserDetails} from '../user_details';
import {Comments} from './comments';

const getDomain = function (url: string | undefined) {
    if (url === undefined) return null;

    try {
        return new URL(url).hostname.replace(/^www\./, '');
    } catch {
        return url;
    }
};

export const Card: React.FC<{item: HNItem}> = function ({item}) {
    const domain = getDomain(item.url);
    const isFresh = new Date().getTime() - item.created_at.getTime() <= 1000 * 60 * 60 * 25;

    return (
        <ListItem disablePadding sx={{mb: 1}}>
            <Box
                component="article"
                sx={{
                    alignItems: 'center',
                    bgcolor: '#f6f6ef',
                    borderLeftColor: isFresh ? 'success.main' : 'divider',
                    borderLeftStyle: 'solid',
                    borderLeftWidth: isFresh ? 4 : 2,
                    display: 'grid',
                    gap: {xs: 1, sm: 2},
                    gridTemplateColumns: 'minmax(0, 1fr) auto',
                    px: 2,
                    py: 1.5,
                    transition: (theme) => theme.transitions.create('background-color'),
                    width: '100%',
                    '&:hover': {bgcolor: 'action.hover'},
                }}
            >
                <Box sx={{gridColumn: '1 / -1', gridRow: 1, minWidth: 0}}>
                    <Typography component="h2" variant="subtitle1" sx={{fontWeight: 600, lineHeight: 1.3}}>
                        {item.url === undefined ? (
                            item.title
                        ) : (
                            <Link color="text.primary" href={item.url} target="_blank" underline="hover">
                                {item.title}
                            </Link>
                        )}
                    </Typography>

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
                        {domain !== null && (
                            <Typography component="span" variant="caption">
                                {domain}
                            </Typography>
                        )}
                        {domain !== null && <Typography variant="caption">·</Typography>}
                        <UserDetails user={item.author}>
                            <Typography component="span" variant="caption" sx={{cursor: 'pointer'}}>
                                {item.author}
                            </Typography>
                        </UserDetails>
                        <Typography variant="caption">·</Typography>
                        <Typography component="time" variant="caption" title={toLocaleString(item.created_at)}>
                            {relativeTime(item.created_at)}
                        </Typography>
                    </Box>

                    {item.story_text !== undefined && (
                        <Typography
                            component="div"
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                display: '-webkit-box',
                                mt: 0.75,
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                '& p': {m: 0},
                            }}
                            dangerouslySetInnerHTML={{__html: item.story_text}}
                        />
                    )}
                </Box>

                <Box sx={{alignItems: 'center', display: 'flex', gap: 0.5, gridColumn: 1, gridRow: 2}}>
                    <Badge score={item.points} />
                    <CopyHNLink itemId={item.objectID} />
                    <BookmarkHNLink itemId={item.objectID} />
                </Box>

                <Box sx={{alignSelf: 'center', gridColumn: 2, gridRow: 2, justifySelf: 'end'}}>
                    <Comments item={item} />
                </Box>
            </Box>
        </ListItem>
    );
};
