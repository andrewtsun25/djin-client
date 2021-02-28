import { InstrumentType } from './InstrumentType';

type InstrumentTypeValues = `${InstrumentType}`;

export interface MusicScore {
    date: Date;
    name: string;
    sections: { [k in InstrumentTypeValues]: string };
    trackUrl: string;
}
