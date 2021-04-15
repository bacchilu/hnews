import React from 'react';

// const ajaxGet = async function (start, end, hitsPerPage) {
//     const searchParams = new URLSearchParams({
//         query: '',
//         numericFilters: `created_at_i>${start},created_at_i<=${end},points>=100`,
//         hitsPerPage: hitsPerPage,
//     });
//     const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
//     return await (await fetch(url)).json();
// };

// const getData = async function () {
//     const NOW = new Date() / 1000;
//     const DAY = 60 * 60 * 24;
//     const start = NOW - 3 * DAY;
//     const end = NOW;
//     const res = await ajaxGet(start, end, 0);
//     return (await ajaxGet(start, end, res['nbHits']))['hits'];
// };

const Fetch = (function () {
    const ajaxGet = async function (start, end, hitsPerPage) {
        const searchParams = new URLSearchParams({
            query: '',
            numericFilters: `created_at_i>${start},created_at_i<=${end}`,
            hitsPerPage: hitsPerPage,
        });
        const url = `https://hn.algolia.com/api/v1/search?${searchParams.toString()}`;
        return (await fetch(url)).json();
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

export const useItems = function () {
    const [items, setItems] = React.useState(null);
    React.useEffect(async function () {
        setItems(await Fetch.getData());
    }, []);

    return items;
};
