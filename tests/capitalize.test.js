const capitalize = require('../code/capitalize');

test('returns string', () => {
    expect(typeof capitalize()).toBe('string');
});

test('doesn\'t return a number', () => {
    expect(typeof capitalize()).not.toBe('number');
});

test('first letter is capitalized', () => {
    const string = capitalize();
    const firstLetter = string.charAt(0);

    expect(firstLetter).toMatch(/[A-Z]/);
});

test('rest of string is lowercase', () => {
    const string = capitalize();
    const restOfString = string.substring(1);

    expect(restOfString).not.toMatch(/[A-Z]/);
});