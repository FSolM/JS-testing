import caesarCipher from '../functions/caesarCipher';

test('Cipher coding with key 25 to bnchmf', () => {
  expect(caesarCipher('coding', 25)).toBe('bnchmf');
});

test('Cipher " " with key 5 to " "', () => {
  expect(caesarCipher(' ', 5)).toBe(' ');
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

test('Cipher testing with no key to testing', () => {
  expect(caesarCipher('testing')).toBe('testing');
});
