import { DateTime } from 'luxon';

export interface MusicScore {
    date: DateTime;
    title: string;
    parts: Record<string, string>;
    trackUrl: string;
}
