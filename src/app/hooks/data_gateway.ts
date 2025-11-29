import type {HNItem} from './entities';

export interface HNItemsGateway {
    getData(from: number, to: number, hitsPerPage: number): Promise<HNItem[]>;
}
