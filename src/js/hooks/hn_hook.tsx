import useSWR from 'swr';

import {HNItem, getHNItems} from '../model/hn';

// https://hn.algolia.com/api
// https://github.com/minimaxir/hacker-news-undocumented

const Fetch = (function () {
    return {
        getData: function () {
            return async () => {
                const NOW = Date.now() / 1000;
                const DAY = 60 * 60 * 24;

                const res = await Promise.all(
                    [0, 1, 2, 3, 4, 5, 6].map((i) => getHNItems(NOW - (7 - i) * DAY, NOW - (6 - i) * DAY, 2 ** i))
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

export const useHNItems = function (days = 7) {
    const {data, ...res} = useSWR<HNItem[], Error>('HN_ITEMS', Fetch.getData(), {
        dedupingInterval: 60000,
    });

    const now = new Date();
    return data === undefined
        ? {data, ...res}
        : {
              data: data.filter((item) => {
                  const diff = now.getTime() - new Date(item.created_at).getTime();
                  return diff <= 24 * 60 * 60 * 1000 * days;
              }),
              ...res,
          };
};
