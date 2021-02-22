import { InstrumentId } from 'types/music';
import { Instrument } from 'types/music/Instrument';

const Instruments: Instrument[] = [
    {
        name: 'Violin 1',
        id: InstrumentId.VIOLIN1,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/violin1.jpg',
    },
    {
        name: 'Violin 2',
        id: InstrumentId.VIOLIN2,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/violin2.jpg',
    },
    {
        name: 'Viola',
        id: InstrumentId.VIOLA,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/viola.jpg',
    },
    {
        name: 'Cello',
        id: InstrumentId.CELLO,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/cello.jpg',
    },
    {
        name: 'Double Bass',
        id: InstrumentId.DOUBLE_BASS,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/doublebass.jpg',
    },
    {
        name: 'Concert Score',
        id: InstrumentId.ORCHESTRA,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/orchestra.jpg',
    },
    {
        name: 'Piano',
        id: InstrumentId.PIANO,
        mediaUrl: 'https://storage.googleapis.com/storage.djin.dev/music/img/piano.jpg',
    },
];

export default Instruments;
