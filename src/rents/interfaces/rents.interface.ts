import { IBase, IPaginate } from '../../common/interfaces';

export interface IRent extends IBase {
    readonly _id?: string;
    readonly rentId?: string;
    readonly carType?: string;
    readonly car?: string;
    readonly owner?: string;
    readonly customer?: string;
    readonly rentFromDate?: number;
    readonly rentToDate?: number;
    readonly pickup?: string;
    readonly dropoff?: string;
    readonly destiniation?: string;
    readonly price?: number;
    readonly priceBreakdown?: Record<string, any>;
    readonly status?: string;
    readonly paymentStatus?: string;
    readonly notesForOwner?: string;
}

export interface IRents extends IPaginate {
    data: IRent[];
}
