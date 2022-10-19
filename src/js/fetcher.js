import useSWR from 'swr';

// https://github.com/minimaxir/hacker-news-undocumented

const Fetch = (function () {
    const ajaxGet = async function (start, end, hitsPerPage) {
        const searchParams = new URLSearchParams({
            query: '',
            numericFilters: `created_at_i>${start},created_at_i<=${end}`,
            hitsPerPage: hitsPerPage,
        });
        const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('An error occurred while fetching the data.');
        return res.json();
    };

    const getDaysData = async function (start, end, n) {
        return (await ajaxGet(start, end, n))['hits'];
    };

    return {
        getData: async function () {
            const NOW = new Date() / 1000;
            const DAY = 60 * 60 * 24;

            const res = await Promise.all(
                [0, 1, 2, 3, 4, 5, 6].map(function (i) {
                    return getDaysData(NOW - (7 - i) * DAY, NOW - (6 - i) * DAY, 2 ** i);
                })
            );

            return res
                .reduce(function (acc, item) {
                    return [...acc, ...item];
                }, [])
                .sort(function (a, b) {
                    if (a['points'] < b['points']) return 1;
                    if (a['points'] > b['points']) return -1;
                    return 0;
                });
        },
    };
})();

export const useHNItems = function () {
    return useSWR('hn_items', Fetch.getData, {dedupingInterval: 60000});
};
