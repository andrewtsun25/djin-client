import { DateTime } from 'luxon';
import { Instrument, MusicScore } from 'types/music';

const Reclaimer: MusicScore = {
    title: 'Prelude of Purgatory',
    date: DateTime.fromISO('2020-05-01T00:00:00-08:00'),
    parts: {
        [Instrument.PIANO]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/preludeOfPurgatory/preludeOfPurgatory_piano.pdf',
    },
    trackUrl: 'https://soundcloud.com/djtaeyong/prelude-of-purgatory',
};

const LamentingLoss: MusicScore = {
    title: 'Lamenting Loss',
    date: DateTime.fromISO('2018-06-01T00:00:00-08:00'),
    parts: {
        [Instrument.PIANO]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/lamentingLoss/lamentingLoss_piano.pdf',
    },
    trackUrl: 'https://soundcloud.com/djtaeyong/lamenting-loss',
};

const Indeterminate: MusicScore = {
    title: 'Indeterminate',
    date: DateTime.fromISO('2011-11-01T00:00:00-08:00'),
    parts: {
        [Instrument.ORCHESTRA]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/indeterminate/indeterminate_orchestra.pdf',
    },
    trackUrl: 'https://soundcloud.com/djtaeyong/indeterminate',
};

const HybridDuality: MusicScore = {
    title: 'Hybrid Duality',
    date: DateTime.fromISO('2011-04-01T00:00:00-08:00'),
    parts: {
        [Instrument.ORCHESTRA]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/hybridDuality/hybridDuality_orchestra.pdf',
        [Instrument.PIANO]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/hybridDuality/hybridDuality_piano.pdf',
        [Instrument.VIOLIN1]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/hybridDuality/hybridDuality_violin1.pdf',
        [Instrument.VIOLIN2]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/hybridDuality/hybridDuality_violin2.pdf',
        [Instrument.VIOLA]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/hybridDuality/hybridDuality_viola.pdf',
        [Instrument.CELLO]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/hybridDuality/hybridDuality_cello.pdf',
        [Instrument.BASS]:
            'https://storage.googleapis.com/storage.djin.dev/music/docs/hybridDuality/hybridDuality_doubleBass.pdf',
    },
    trackUrl: 'https://soundcloud.com/djtaeyong/hybrid-duality',
};

const Lost: MusicScore = {
    title: 'Lost (USOMC 3rd Place State Level Winner 2010)',
    date: DateTime.fromISO('2010-02-01T00:00:00-08:00'),
    parts: {
        [Instrument.PIANO]: 'https://storage.googleapis.com/storage.djin.dev/music/docs/lost/lost_piano.pdf',
    },
    trackUrl: 'https://soundcloud.com/djtaeyong/lost',
};

const ClassicalMusicScores = [Reclaimer, LamentingLoss, Indeterminate, HybridDuality, Lost];

export { ClassicalMusicScores };
