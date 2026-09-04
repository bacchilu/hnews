import type {HNItem} from './entities';

export interface HNItemsGateway {
    getData(hitsPerPage: number, from: Date, to?: Date): Promise<HNItem[]>;
}
