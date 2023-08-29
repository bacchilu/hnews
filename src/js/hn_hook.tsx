import useSWR from 'swr';

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

const createCounter = function () {
    let progress = 0;
    return {
        incr: function () {
            progress += 1;
            return progress;
        },
    };
};

const Fetch = (function () {
    const getDaysHits = async function (start: number, end: number, hitsPerPage: number, cb: () => void) {
        const searchParams = new URLSearchParams({
            query: '',
            numericFilters: `created_at_i>${start},created_at_i<=${end}`,
            hitsPerPage: `${hitsPerPage}`,
        });
        const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('An error occurred while fetching the data.');
        cb();
        return (await res.json()).hits as HNItem[];
    };

    return {
        getData: function (progressCb: (data: [number, number]) => void) {
            return async () => {
                const NOW = Date.now() / 1000;
                const DAY = 60 * 60 * 24;

                const data = [0, 1, 2, 3, 4, 5, 6];
                const counter = createCounter();
                const cb = function () {
                    const res: [number, number] = [counter.incr(), data.length];
                    progressCb(res);
                };
                const res = await Promise.all(
                    data.map((i) => getDaysHits(NOW - (7 - i) * DAY, NOW - (6 - i) * DAY, 2 ** i, cb))
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
    const progressCb = function (data: [number, number]) {
        console.log(data);
    };
    return useSWR('HN_ITEMS', Fetch.getData(progressCb), {dedupingInterval: 60000});
};
