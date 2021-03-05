import { isNil } from 'lodash';

/**
 * Returns the opposite of lodash's isNil function for easier usage in chaining.
 * @param obj - The object to check if it is not null nor undefined.
 * @return true if the object is not null nor undefined, false otherwise.
 */
export function isNotNil<T>(obj: T | null | undefined): obj is T {
    return !isNil(obj);
}
