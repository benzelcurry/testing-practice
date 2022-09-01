const caesar = require('../code/caesarCipher');

test('executes caesar cipher on single word', () => {
    expect(caesar('planet')).toBe('qmbofu');
});

test('works with multiple words', () => {
    expect(caesar('this here sentence')).toBe('uijt ifsf tfoufodf');
});

test('works with punctuation, capitals, and numbers', () => {
    expect(caesar(`There's 7 dogs!`)).toBe(`Uifsf't 7 epht!`);
});