import {HNItem} from '../model/hn';

export type HNItemsGateway = (from: number, to: number, hitsPerPage: number) => Promise<HNItem[]>;
