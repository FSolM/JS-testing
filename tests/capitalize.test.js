import capitalize from '../functions/capitalize.js';

test('Capitalize x to X', () => {
  expect(capitalize('x')).toBe('X');
});

test('Capitalize hello to Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Capitalize welcome mexico to Welcome mexico', () => {
  expect(capitalize('welcome mexico')).toBe('Welcome mexico');
});


test('Capitalize i like coding to I like coding', () => {
  expect(capitalize('i like coding')).toBe('I like coding');
});

test('Capitalize sdfklnv to Sdfklnv', () => {
  expect(capitalize('sdfklnv')).toBe('Sdfklnv');
});

test('Capitalize 123 to 123', () => {
  expect(capitalize('123')).toBe('123');
});

test('Capitalize Microverse to Microverse', () => {
  expect(capitalize('Microverse')).toBe('Microverse');
});

test('Capitalize " " to " "', () => {
  expect(capitalize(' ')).toBe(' ');
});

test('Capitalize "" to ""', () => {
  expect(capitalize('')).toBe('');
});
