// https://hn.algolia.com/api
// https://github.com/minimaxir/hacker-news-undocumented

import * as z from 'zod/mini';

import type {HNItemsGateway} from '../hooks/data_gateway';
import type {HNItem} from '../hooks/entities';

const HNItemSchema = z.object({
    objectID: z.pipe(z.string(), z.pipe(z.transform(Number), z.int().check(z.nonnegative()))),
    author: z.string(),
    title: z.optional(z.string()),
    points: z.int().check(z.nonnegative()),
    created_at: z.pipe(
        z.string(),
        z.transform((v) => new Date(v))
    ),
    story_text: z.optional(z.string()),
    url: z.optional(z.string()),
    num_comments: z.optional(z.int().check(z.nonnegative())),
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
    getData: async function (from: Date, to: Date, hitsPerPage: number): Promise<HNItem[]> {
        const fromEpoch: number = Math.floor(from.getTime() / 1000);
        const toEpoch: number = Math.floor(to.getTime() / 1000);
        const searchParams = new URLSearchParams({
            query: '',
            numericFilters: `created_at_i>${fromEpoch},created_at_i<=${toEpoch}`,
            hitsPerPage: `${hitsPerPage}`,
        });
        const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('An error occurred while fetching the data.');
        const data: HNItemInput[] = (await res.json()).hits;
        return data.map((item) => toEntity(parse(item)));
    },
};
