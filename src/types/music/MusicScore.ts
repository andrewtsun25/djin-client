import { DateTime } from 'luxon';

import { Instrument } from './Instrument';

export interface MusicScore {
    date: DateTime;
    title: string;
    parts: Record<string, string>;
    trackUrl: string;
}
