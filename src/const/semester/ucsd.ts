import {DateTime} from "luxon";
import {SemesterLookup} from "types/alias";

const UCSD: SemesterLookup = {
    Fall2012: {
        name: "Fall 2012",
        date: DateTime.fromISO("2012-09-27T00:00:00-08:00")
    },
    Winter2013: {
        name: "Winter 2013",
        date: DateTime.fromISO("2013-01-07T00:00:00-08:00")
    },
    Spring2013: {
        name: "Spring 2013",
        date: DateTime.fromISO("2013-04-01T00:00:00-08:00")
    },
    Fall2013: {
        name: "Fall 2013",
        date: DateTime.fromISO("2013-09-26T00:00:00-08:00")
    },
    Winter2014: {
        name: "Winter 2014",
        date: DateTime.fromISO("2014-03-31T00:00:00-08:00")
    },
    Spring2014: {
        name: "Spring 2014",
        date: DateTime.fromISO("2014-03-31T00:00:00-08:00")
    },
    Fall2014: {
        name: "Fall 2014",
        date: DateTime.fromISO("2014-10-02T00:00:00-08:00")
    },
    Winter2015: {
        name: "Winter 2015",
        date: DateTime.fromISO("2015-01-05T00:00:00-08:00")
    },
    Spring2015: {
        name: "Spring 2015",
        date: DateTime.fromISO("2015-03-30T00:00:00-08:00")
    },
    Fall2015: {
        name: "Fall 2015",
        date: DateTime.fromISO("2015-09-21T00:00:00-08:00")
    },
    Winter2016: {
        name: "Winter 2016",
        date: DateTime.fromISO("2016-01-04T00:00:00-08:00")
    },
    Spring2016: {
        name: "Spring 2016",
        date: DateTime.fromISO("2016-04-28T00:00:00-08:00")
    },
    Graduation: {
        name: "Graduation",
        date: DateTime.fromISO("2016-06-10T00:00:00-08:00")
    }
}

export default UCSD;
