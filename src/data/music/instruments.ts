import { InstrumentType } from 'types/music';
import { Instrument } from 'types/music/Instrument';

const Instruments: Instrument[] = [
    {
        name: 'Violin 1',
        type: InstrumentType.VIOLIN1,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/violin1.jpg',
    },
    {
        name: 'Violin 2',
        type: InstrumentType.VIOLIN2,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/violin2.jpg',
    },
    {
        name: 'Viola',
        type: InstrumentType.VIOLA,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/viola.jpg',
    },
    {
        name: 'Cello',
        type: InstrumentType.CELLO,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/cello.jpg',
    },
    {
        name: 'Double Bass',
        type: InstrumentType.DOUBLE_BASS,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/doublebass.jpg',
    },
    {
        name: 'Concert Score',
        type: InstrumentType.ORCHESTRA,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/orchestra.jpg',
    },
    {
        name: 'Piano',
        type: InstrumentType.PIANO,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/piano.jpg',
    },
];

export default Instruments;
