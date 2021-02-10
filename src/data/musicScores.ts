import { DateTime } from 'luxon';
import { Instrument, MusicScore } from 'types/music';

const Reclaimer: MusicScore = {
    title: 'Reclaimer',
    date: DateTime.fromISO('2020-05-01T00:00:00-08:00'),
    parts: {
        [Instrument.PIANO]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5e9fe393950dee1e5f9e2105/1587536787717/Reclaimer+-+Score.pdf',
    },
};

const LamentingLoss: MusicScore = {
    title: 'Lamenting Loss',
    date: DateTime.fromISO('2018-06-01T00:00:00-08:00'),
    parts: {
        [Instrument.PIANO]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b2b00cbf950b7ec2441a0b8/1529544910779/Lamenting_Loss+-+Score.pdf',
    },
};

const Indeterminate: MusicScore = {
    title: 'Indeterminate',
    date: DateTime.fromISO('2011-11-01T00:00:00-08:00'),
    parts: {
        [Instrument.PIANO]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b35eb1baa4a99232a630319/1530260251730/indeterminate_score.pdf',
    },
};

const HybridDuality: MusicScore = {
    title: 'Hybrid Duality',
    date: DateTime.fromISO('2011-04-01T00:00:00-08:00'),
    parts: {
        [Instrument.ORCHESTRA]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b35eb010e2e720f5f216392/1530260226290/Hybrid_Duality.pdf',
        [Instrument.PIANO]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b35ebf9aa4a99232a6311fe/1530260475783/Hybrid_Duality_2_11+-+Piano.pdf',
        [Instrument.VIOLIN1]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b35ec0e88251b0938038baa/1530260494797/Hybrid_Duality_2_11+-+Violin+1.pdf',
        [Instrument.VIOLIN2]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b35ec40aa4a99232a6316a1/1530260544756/Hybrid_Duality_2_11+-+Violin+2.pdf',
        [Instrument.VIOLA]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b35ec4f352f5320a97fdf16/1530260560177/Hybrid_Duality_2_11+-+Viola.pdf',
        [Instrument.CELLO]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b35ec61575d1f7d68dfb1d6/1530260577333/Hybrid_Duality_2_11+-+Cello.pdf',
        [Instrument.BASS]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b35ec73f950b745b91ebf84/1530260596079/Hybrid_Duality_2_11+-+Double+Bass.pdf',
    },
};

const Lost: MusicScore = {
    title: 'Lost (USOMC 3rd Place State Level Winner 2010)',
    date: DateTime.fromISO('2010-02-01T00:00:00-08:00'),
    parts: {
        [Instrument.PIANO]:
            'https://static1.squarespace.com/static/5b06683d89c172fcf6c30356/t/5b35eb63aa4a99232a630812/1530260324826/Lost.pdf',
    },
};

const ClassicalMusicScores = [Reclaimer, LamentingLoss, Indeterminate, HybridDuality, Lost];

export { ClassicalMusicScores };
