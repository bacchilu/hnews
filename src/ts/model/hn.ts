// https://hn.algolia.com/api
// https://github.com/minimaxir/hacker-news-undocumented

import {z} from 'zod';

export interface HNItem {
    objectID: string;
    author: string;
    title: string;
    points: number;
    created_at: Date;
    story_text?: string;
    url?: string;
    num_comments: number;
}

const HNItemsParser: z.ZodType<HNItem[]> = z.array(
    z.object({
        objectID: z.string(),
        author: z.string(),
        title: z.string(),
        points: z.number().int().nonnegative(),
        created_at: z.string().transform((v) => new Date(v)),
        story_text: z.string().optional(),
        url: z.string().optional(),
        num_comments: z.number().int().nonnegative(),
    })
);

export const getHNItems = async function (from: number, to: number, hitsPerPage: number): Promise<HNItem[]> {
    const searchParams = new URLSearchParams({
        query: '',
        numericFilters: `created_at_i>${from},created_at_i<=${to}`,
        hitsPerPage: `${hitsPerPage}`,
    });
    const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('An error occurred while fetching the data.');
    const data: any[] = (await res.json()).hits;
    return HNItemsParser.parse(data);
};
