import type {HNItem} from './entities';

export type HNItemsGateway = (from: number, to: number, hitsPerPage: number) => Promise<HNItem[]>;
