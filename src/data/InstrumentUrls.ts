import { Instrument } from 'types/music';

const InstrumentUrls: Record<Instrument, string> = {
    [Instrument.VIOLIN1]: 'https://storage.googleapis.com/storage.djin.dev/music/img/violin1.jpg',
    [Instrument.VIOLIN2]: 'https://storage.googleapis.com/storage.djin.dev/music/img/violin2.jpg',
    [Instrument.VIOLA]: 'https://storage.googleapis.com/storage.djin.dev/music/img/viola.jpg',
    [Instrument.CELLO]: 'https://storage.googleapis.com/storage.djin.dev/music/img/cello.jpg',
    [Instrument.BASS]: 'https://storage.googleapis.com/storage.djin.dev/music/img/doublebass.jpg',
    [Instrument.ORCHESTRA]: 'https://storage.googleapis.com/storage.djin.dev/music/img/orchestra.jpg',
    [Instrument.PIANO]: 'https://storage.googleapis.com/storage.djin.dev/music/img/piano.jpg',
};

export default InstrumentUrls;
