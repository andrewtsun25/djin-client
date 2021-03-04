import { isNotNil } from './general';

describe('isNotNil', () => {
    it('returns true if a value is not null nor undefined', () => {
        const input = 'input';
        const actual = isNotNil(input);
        expect(actual).toEqual(true);
    });

    it('returns true if a value is null', () => {
        const input = null;
        const actual = isNotNil(input);
        expect(actual).toEqual(false);
    });

    it('returns true if a value is undefined', () => {
        const input = undefined;
        const actual = isNotNil(input);
        expect(actual).toEqual(false);
    });
});
