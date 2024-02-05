// https://hn.algolia.com/api
// https://github.com/minimaxir/hacker-news-undocumented

export interface HNItem {
    objectID: string;
    author: string;
    title: string;
    points: number;
    created_at: Date;
    story_text: string;
    url: string;
    num_comments: number | null;
}

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
    return data.map((item) => ({
        objectID: item.objectID,
        author: item.author,
        title: item.title,
        points: item.points,
        created_at: new Date(item.created_at),
        story_text: item.story_text,
        url: item.url,
        num_comments: item.num_comments,
    })) as HNItem[];
};
