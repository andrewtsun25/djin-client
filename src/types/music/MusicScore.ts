import { DateTime } from 'luxon';

export interface MusicScore {
    date: DateTime;
    name: string;
    sections: Record<string, string>;
    trackUrl: string;
}
