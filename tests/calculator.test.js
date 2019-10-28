import calculator from '../functions/calculator';

// Sum Mehtod Tests

test('Calculator sum 1 + 2 to 3', () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test('Calculator sum 10 + 20 to 30', () => {
  expect(calculator.sum(10, 20)).toBe(30);
});

test('Calculator sum -1 + -4 to -5', () => {
  expect(calculator.sum(-1, -4)).toBe(-5);
});

test('Calculator sum 5 + noting to 5', () => {
  expect(calculator.sum(5)).toBe(5);
});

test('Calculator sum nothing to be 0', () => {
  expect(calculator.sum()).toBe(0);
});

// Subs Method Test

test('Calculator subs 5 - 1 to 4', () => {
  expect(calculator.subs(5, 1)).toBe(4);
});

test('Calculator subs 10 - 4 to 6', () => {
  expect(calculator.subs(10, 4)).toBe(6);
});

test('Calculator subs 1 - 10 to -9', () => {
  expect(calculator.subs(1, 10)).toBe(-9);
});

test('Calculator subs -4 - 6 to -10', () => {
  expect(calculator.subs(-4, 6)).toBe(-10);
});

test('Calculator subs -5 - (-5) to 0', () => {
  expect(calculator.subs(-5, -5)).toBe(0);
});

test('Calculator subs 2 - nothing to 2', () => {
  expect(calculator.subs(2)).toBe(2);
});

test('Calculator subs nothing to 0', () => {
  expect(calculator.subs()).toBe(0);
});

// Mult Method Test

test('Calculator mult 5 * 2 to 10', () => {
  expect(calculator.mult(5, 2)).toBe(10);
});

test('Calculator mult 2 * 7 to 14', () => {
  expect(calculator.mult(2, 7)).toBe(14);
});

test('Calculator mult 4 * -5 to -20', () => {
  expect(calculator.mult(4, -5)).toBe(-20);
});

test('Calculator mult -3 * 4 to -12', () => {
  expect(calculator.mult(-3, 4)).toBe(-12);
});

test('Calculator mult -4 * -4 to 16', () => {
  expect(calculator.mult(-4, -4)).toBe(16);
});

test('Calculator mult 5 * nothing to 0', () => {
  expect(calculator.mult(5)).toBe(0);
});

test('Calculator mult nothing to 0', () => {
  expect(calculator.mult()).toBe(0);
});

// Div Method Test

test('Calculator div 6 / 2 to 3', () => {
  expect(calculator.div(6, 2)).toBe(3);
});

test('Calculator div 10 / 5 to 2', () => {
  expect(calculator.div(10, 5)).toBe(2);
});

test('Calculator div 5 / 2 to 2.5', () => {
  expect(calculator.div(5, 2)).toBe(2.5);
});

test('Calculator div 10 / 4 to 2.5', () => {
  expect(calculator.div(10, 4)).toBe(2.5);
});

test('Calculator div -5 / 1 to -5', () => {
  expect(calculator.div(-5, 1)).toBe(-5);
});

test('Calculator div 20 / -2 to -10', () => {
  expect(calculator.div(20, -2)).toBe(-10);
});

test('Calculator div -30 / -10 to 3', () => {
  expect(calculator.div(-30, -10)).toBe(3);
});

test('Calculator div 0 / 10 to 0', () => {
  expect(calculator.div(0, 10)).toBe(0);
});

test('Calculator div 5 / nothing to infinity', () => {
  expect(calculator.div(5)).toBe(Infinity);
});

test('Calculator div nothing to NaN', () => {
  expect(calculator.div()).toBe(NaN);
});
