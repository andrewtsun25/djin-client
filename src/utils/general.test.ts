import { isNotNil } from './general';

describe('isNotNil', () => {
    test('returns true if a value is not null nor undefined', () => {
        const input = 'input';
        const actual = isNotNil(input);
        expect(actual).toEqual(true);
    });

    test('returns true if a value is null', () => {
        const input = null;
        const actual = isNotNil(input);
        expect(actual).toEqual(false);
    });

    test('returns true if a value is undefined', () => {
        const input = undefined;
        const actual = isNotNil(input);
        expect(actual).toEqual(false);
    });
});
