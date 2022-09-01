const reverseString = require('../code/reverseString');

test('returns string', () => {
    expect(typeof reverseString('')).toBe('string');
});

test('racecar becomes racecar', () => {
    expect(reverseString('racecar')).toBe('racecar');
});

test('bottle becomes elttob', () => {
    expect(reverseString('bottle')).toBe('elttob');
});

test(`'spaces also' becomes 'osla secaps'`, () => {
    expect(reverseString('spaces also')).toBe('osla secaps');
});

test('numbers get converted to strings', () => {
    expect(reverseString(2731)).toBe('1372');
});