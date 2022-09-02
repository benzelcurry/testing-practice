const analyze = require('../code/analyzeArray');

test('works with an array of 2', () => {
    expect(analyze(2, 8)).toStrictEqual({
        average: 5,
        min: 2,
        max: 8,
        length: 2
    });
});

test('works with a larger array', () => {
    expect(analyze(4, 17, 1, 21, 98, 3)).toStrictEqual({
        average: 24,
        min: 1,
        max: 98,
        length: 6
    });
});

test('works with an array containing a 0', () => {
    expect(analyze(12, 0, 3, 7)).toStrictEqual({
        average: 5.5,
        min: 0,
        max: 12,
        length: 4
    });
});

test('works with an empty array', () => {
    expect(analyze()).toStrictEqual({
        average: NaN,
        min: undefined,
        max: undefined,
        length: 0
    });
});