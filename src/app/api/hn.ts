// https://hn.algolia.com/api
// https://github.com/minimaxir/hacker-news-undocumented

import {z} from 'zod';

import type {HNItemsGateway} from '../hooks/data_gateway';
import type {HNItem} from '../hooks/entities';

const HNItemSchema = z.object({
    objectID: z.string(),
    author: z.string(),
    title: z.string(),
    points: z.number().int().nonnegative(),
    created_at: z.string().transform((v) => new Date(v)),
    story_text: z.string().optional(),
    url: z.string().optional(),
    num_comments: z.number().int().nonnegative(),
});
type HNItemInput = z.input<typeof HNItemSchema>;
type HNItemOutput = z.output<typeof HNItemSchema>;

const parse = function (data: HNItemInput): HNItem {
    const res: HNItemOutput = HNItemSchema.parse(data);
    return {...res} as HNItem;
};

export const getHNItems: HNItemsGateway = async function (
    from: number,
    to: number,
    hitsPerPage: number
): Promise<HNItem[]> {
    const searchParams = new URLSearchParams({
        query: '',
        numericFilters: `created_at_i>${from},created_at_i<=${to}`,
        hitsPerPage: `${hitsPerPage}`,
    });
    const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('An error occurred while fetching the data.');
    const data: HNItemInput[] = (await res.json()).hits;
    return data.map((item) => parse(item));
};
