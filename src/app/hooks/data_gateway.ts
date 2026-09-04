import type {HNItem} from './entities';

export interface HNItemsGateway {
    getData(from: Date, to: Date, hitsPerPage: number): Promise<HNItem[]>;
}
