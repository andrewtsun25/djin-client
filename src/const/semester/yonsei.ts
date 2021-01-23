import {DateTime} from "luxon";
import {SemesterLookup} from "types/alias";

const Yonsei: SemesterLookup = {
    YISS: {
        name: "Yonsei International Summer School (YISS)",
        date: DateTime.fromISO("2016-06-28T00:00:00+09:00")
    },
    Graduation: {
        name: "Graduation",
        date: DateTime.fromISO("2016-08-04T00:00:00+09:00")
    }
}

export default Yonsei;
