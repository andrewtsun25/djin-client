import { InstrumentId } from './InstrumentId';

export interface Instrument {
    name: string;
    id: InstrumentId;
    mediaUrl: string;
}
