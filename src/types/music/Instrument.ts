import { InstrumentType } from './InstrumentType';

export interface Instrument {
    mediaUrl: string;
    name: string;
    type: InstrumentType;
}
