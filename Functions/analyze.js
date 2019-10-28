const getAverage = (array) => {
  let sum = 0;
  array.forEach((value) => {
    sum += value;
  });
  return sum / array.length;
};

export default (array) => {
  return {
    average: getAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};
