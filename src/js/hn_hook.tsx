import useSWR from 'swr';

// https://hn.algolia.com/api
// https://github.com/minimaxir/hacker-news-undocumented

export interface HNItem {
    objectID: string;
    author: string;
    title: string;
    points: number;
    created_at: string;
    story_text: string;
    url: string;
    num_comments: number | null;
}

const Fetch = (function () {
    const getDaysHits = async function (from: number, to: number, hitsPerPage: number) {
        const searchParams = new URLSearchParams({
            query: '',
            numericFilters: `created_at_i>${from},created_at_i<=${to}`,
            hitsPerPage: `${hitsPerPage}`,
        });
        const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('An error occurred while fetching the data.');
        return (await res.json()).hits as HNItem[];
    };

    return {
        getData: function () {
            return async () => {
                const NOW = Date.now() / 1000;
                const DAY = 60 * 60 * 24;

                const res = await Promise.all(
                    [0, 1, 2, 3, 4, 5, 6].map((i) => getDaysHits(NOW - (7 - i) * DAY, NOW - (6 - i) * DAY, 2 ** i))
                );
                return res
                    .reduce((acc, item) => [...acc, ...item], [])
                    .sort((a, b) => {
                        if (a.points < b.points) return 1;
                        if (a.points > b.points) return -1;
                        return 0;
                    });
            };
        },
    };
})();

export const useHNItems = function () {
    return useSWR<HNItem[], Error>('HN_ITEMS', Fetch.getData(), {dedupingInterval: 60000});
};
