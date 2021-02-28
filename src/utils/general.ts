import { isNil } from 'lodash';

export function isNotNil<T>(obj: T | null | undefined): obj is T {
    return !isNil(obj);
}
