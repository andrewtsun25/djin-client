import {DateTime} from "luxon";

const USC = {
    Fall2018: {
        name: "Fall 2018",
        date: DateTime.fromISO("2018-08-20T00:00:00-08:00")
    },
    Spring2019: {
        name: "Spring 2019",
        date: DateTime.fromISO("2019-01-07T00:00:00-08:00")
    },
    Fall2019: {
        name: "Fall 2019",
        date: DateTime.fromISO("2019-08-26T00:00:00-08:00")
    },
    Spring2020: {
        name: "Spring 2020",
        date: DateTime.fromISO("2020-01-13T00:00:00-08:00")
    },
    Graduation: {
        name: "Graduation",
        date: DateTime.fromISO("2020-05-15T00:00:00-08:00")
    }
};

export default USC;
