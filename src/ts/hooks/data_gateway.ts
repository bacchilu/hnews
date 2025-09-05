import type {HNItem} from '../model/entities/hn_item';

export type HNItemsGateway = (from: number, to: number, hitsPerPage: number) => Promise<HNItem[]>;
