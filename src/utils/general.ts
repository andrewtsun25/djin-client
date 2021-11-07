import { isNil } from 'lodash';
import { DateTime } from 'luxon';

/**
 * Returns the opposite of lodash's isNil function for easier usage in chaining.
 * @param obj - The object to check if it is not null nor undefined.
 * @return true if the object is not null nor undefined, false otherwise.
 */
export function isNotNil<T>(obj: T | null | undefined): obj is T {
    return !isNil(obj);
}

/**
 * Determines whether a string is an ISO date.
 * @param str - The string to test if it is a valid date or not.
 * @return true if the string represents a valid ISO date, false otherwise
 */
export function isIsoDate(str: string): boolean {
    const dt = DateTime.fromISO(str);
    return dt.isValid;
}
