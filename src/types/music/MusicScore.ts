import { DateTime } from 'luxon';

export interface MusicScore {
    date: DateTime;
    name: string;
    parts: Record<string, string>;
    trackUrl: string;
}
