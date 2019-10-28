import reverseString from '../functions/reverseString';

test('Reverse book to koob', () => {
  expect(reverseString('book')).toBe('koob');
});

test('Reverse Hello There to erehT olleH', () => {
  expect(reverseString('Hello There').toBe('erehT olleH'));
});

test('Reverse HELLO WORLD to DLROW OLLEH', () => {
  expect(reverseString('HELLO WORLD').toBe('DLROW OLLEH'));
});

test('Reverse 156 to 651', () => {
  expect(reverseString('156')).toBe('651');
});

test('Reverse " " to " "', () => {
  expect(reverseString(' ')).toBe(' ');
});

test('Reverse "" to ""', () => {
  expect(reverseString('')).toBe('');
});

test('Reverse zelda to adlez', () => {
  expect(reverseString(' ')).toBe(' ');
});
