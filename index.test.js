import capitalize from './Functions/capitalize.js';
import reverseString from './Functions/reverseString';
import caesarCipher from './Functions/caesarCipher';


/*  TEST CAPITALIZE  */

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



/*  TEST REVERSE STRING  */

test('Reverse book to koob', () => {
  expect(reverseString('book')).toBe('koob');
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

/*  TEST CAESAR CIPHER  */

test('Cipher coding with key 25 to bnchmf', () => {
  expect(caesarCipher('coding', 25)).toBe('bnchmf');
});

test('Cipher " " with key 25 to " "', () => {
  expect(caesarCipher(' ', 25)).toBe(' ');
});

test('Cipher " I have space " with key 1 to " j ibwf tqbdf "', () => {
  expect(caesarCipher(' I have space ', 1)).toBe(' j ibwf tqbdf ');
});

test('Cipher project with key 15 to egdytri', () => {
  expect(caesarCipher('project', 15)).toEqual('egdytri');
});

test('Cipher "" with key 15 to ""', () => {
  expect(caesarCipher('', 15)).toBe('');
});