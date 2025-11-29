// https://hn.algolia.com/api
// https://github.com/minimaxir/hacker-news-undocumented

import useSWR from 'swr';

import type {HNItemsGateway} from './data_gateway';
import type {HNItem} from './entities';

export const useHNItems = function (dataGateway: HNItemsGateway): {
    data: HNItem[] | undefined;
    error: Error | undefined;
} {
    const fetcher = async function (): Promise<HNItem[]> {
        const NOW = Date.now() / 1000;
        const DAY = 60 * 60 * 24;

        const res: HNItem[][] = await Promise.all(
            [0, 1, 2, 3, 4, 5, 6].map((i) => dataGateway.getData(NOW - (7 - i) * DAY, NOW - (6 - i) * DAY, 2 ** i))
        );
        return res
            .reduce((acc, item) => [...acc, ...item], [])
            .sort((a, b) => {
                if (a.points < b.points) return 1;
                if (a.points > b.points) return -1;
                return 0;
            });
    };

    const {data, error} = useSWR<HNItem[], Error>('HN_ITEMS', fetcher, {dedupingInterval: 60000});
    return {data, error};
};
