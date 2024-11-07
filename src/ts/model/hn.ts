// https://hn.algolia.com/api
// https://github.com/minimaxir/hacker-news-undocumented

import {z} from 'zod';

const HNItemParser = z.object({
    objectID: z.string(),
    author: z.string(),
    title: z.string(),
    points: z.number().int().nonnegative(),
    created_at: z
        .string()
        .datetime()
        .transform((v) => new Date(v)),
    story_text: z.string().optional(),
    url: z.string().optional(),
    num_comments: z.number().int().nonnegative(),
});

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

type AssertSameType<T, U> = T extends U ? (U extends T ? true : never) : never;
type Test = AssertSameType<z.infer<typeof HNItemParser>, HNItem>;
const testValue: Test = true;

const HNItemsParser = z.array(HNItemParser);

export const getHNItems = async function (from: number, to: number, hitsPerPage: number) {
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
