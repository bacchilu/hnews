// https://hn.algolia.com/api
// https://github.com/minimaxir/hacker-news-undocumented

import {z} from 'zod';

import type {HNItemsGateway} from '../hooks/data_gateway';
import type {HNItem} from '../hooks/entities';

const HNItemSchema = z.object({
    objectID: z.string(),
    author: z.string(),
    title: z.string().optional(),
    points: z.number().int().nonnegative(),
    created_at: z.string().transform((v) => new Date(v)),
    story_text: z.string().optional(),
    url: z.string().optional(),
    num_comments: z.number().int().nonnegative().optional(),
});
type HNItemInput = z.input<typeof HNItemSchema>;
type HNItemOutput = z.output<typeof HNItemSchema>;

const toEntity = function (item: HNItemOutput): HNItem {
    return {
        objectID: item.objectID,
        author: item.author,
        title: item.title !== undefined ? item.title : '',
        points: item.points,
        created_at: item.created_at,
        story_text: item.story_text,
        url: item.url,
        num_comments: item.num_comments !== undefined ? item.num_comments : 0,
    };
};

const parse = function (data: HNItemInput): HNItemOutput {
    try {
        return HNItemSchema.parse(data);
    } catch (error) {
        console.error('Failed to parse HN item', {id: (data as any)?.objectID, error, data});
        throw error;
    }
};

export const getHNItems: HNItemsGateway = {
    getData: async function (from: number, to: number, hitsPerPage: number): Promise<HNItem[]> {
        const searchParams = new URLSearchParams({
            query: '',
            numericFilters: `created_at_i>${from},created_at_i<=${to}`,
            hitsPerPage: `${hitsPerPage}`,
        });
        const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('An error occurred while fetching the data.');
        const data: HNItemInput[] = (await res.json()).hits;
        return data.map((item) => toEntity(parse(item)));
    },
};
