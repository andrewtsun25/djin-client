import { InstrumentType } from './InstrumentType';

export interface Instrument {
    name: string;
    type: InstrumentType;
    mediaUrl: string;
}
