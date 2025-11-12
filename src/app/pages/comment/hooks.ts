import useSWR from 'swr';

export interface HNItem {
    by: string;
    title: string;
    score: number;
    time: number;
    url: string;
    id: number;
    kids: number[];
    descendants: number;
}

const fetcher = (...args: Parameters<typeof fetch>): Promise<HNItem> => fetch(...args).then((res) => res.json());

export const useHNItem = function (id: string) {
    const {data, error} = useSWR<HNItem, Error>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, fetcher);
    return {data, error};
};

export const useHNItem2 = function (id: number) {
    const fetcher = (k: string) => fetch(k).then((res) => res.json());
    return useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, fetcher, {dedupingInterval: 60000});
};
