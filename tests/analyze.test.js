import analyze from '../functions/analyze';

test('Analyze [1, 2, 3, 4] to { 2.5, 1, 4, 4 }', () => {
  expect(analyze([1, 2, 3, 4])).toStrictEqual({ average: 2.5, min: 1, max: 4, length: 4 });
});

test('Analyze [2, 4, 6, 8] to { 5, 2, 8, 4 }', () => {
  expect(analyze([2, 4, 6, 8])).toStrictEqual({ average: 5, min: 2, max: 8, length: 4 });
})

test('Analyze [3, 2, 6, 4, 1] to { 3.2, 1, 6, 5 }', () => {
  expect(analyze([3, 2, 6, 4, 1])).toStrictEqual({ average: 3.2, min: 1, max: 6, length: 5 });
});

test('Analyze [1] to { 1, 1, 1, 1 }', () => {
  expect(analyze([1])).toStrictEqual({ average: 1, min: 1, max: 1, length: 1 });
})

test('Analyze [10, 3, 5, 6] to { 6, 3, 10, 4 }', () => {
  expect(analyze([10, 3, 5, 6])).toStrictEqual({ average: 6, min: 3, max: 10, length: 4 });
});

test('Analyze [] to { NaN, 0, 0, 0 }', () => {
  expect(analyze([])).toStrictEqual({ average: NaN, min: Infinity, max: -Infinity, length: 0 });
});
