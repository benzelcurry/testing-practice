const calculator = require('../code/calculator');

test('addition works with positive numbers', () => {
    expect(calculator.addition(2, 2)).toBe(4);
});

test('addition works with negative numbers', () => {
    expect(calculator.addition(-3, -7)).toBe(-10);
});

test('subtraction works with positive numbers', () => {
    expect(calculator.subtraction(7, 2)).toBe(5);
});

test('subtraction works with negative numbers', () => {
    expect(calculator.subtraction(-3, -6)).toBe(3);
});

test('division works with positive numbers', () => {
    expect(calculator.division(7, 2)).toBe(3.5);
});

test('division works with one negative number', () => {
    expect(calculator.division(7, -2)).toBe(-3.5);
});

test('division works with two negative numbers', () => {
    expect(calculator.division(-2, -2)).toBe(1);
});

test('division by 0 doesn\'t return a number', () => {
    expect(calculator.division(4, 0)).toBe(NaN || Infinity || -Infinity);
});

test('multiplication works with positive numbers', () => {
    expect(calculator.multiplication(3, 3)).toBe(9);
});

test('multiplication works with negative numbers', () => {
    expect(calculator.multiplication(4, -3)).toBe(-12);
});