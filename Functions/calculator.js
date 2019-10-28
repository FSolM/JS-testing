export default (() => {
  const sum = (a = 0, b = 0) => a + b;

  const subs = (a = 0, b = 0) => a - b;

  const mult = (a = 0, b = 0) => a * b;

  const div = (a = 0, b = 0) => a / b;

  return { sum, subs, mult, div };
})();
