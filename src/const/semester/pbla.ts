import { DateTime } from 'luxon';
import { SemesterLookup } from 'types/alias';

const PBLA: SemesterLookup = {
    Fall2019: {
        name: 'Fall 2019',
        date: DateTime.fromISO('2019-09-30T00:00:00+09:00'),
    },
    Winter2020: {
        name: 'Winter 2020',
        date: DateTime.fromISO('2020-01-13T00:00:00+09:00'),
    },
    Spring2020: {
        name: 'Spring 2020',
        date: DateTime.fromISO('2020-04-05T00:00:00+09:00'),
    },
    Graduation: {
        name: 'Graduation',
        date: DateTime.fromISO('2020-06-13T00:00:00+09:00'),
    },
};

export default PBLA;
