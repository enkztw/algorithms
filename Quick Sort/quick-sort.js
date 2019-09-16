const sum = (array) => {
  if (array.length === 0) {
    return 0;
  }

  return array.shift() + sum(array);
};

console.log(`Sum of array is ${sum([5, 4, 1, 3, 7])}`);


const num = (array) => {
  if (array.length === 0) {
    return 0;
  }

  return 1 + num(array.slice(1));
};

console.log(`Nums in array is ${num([5, 4, 1, 3, 7])}`);

const maxNum = (array) => {
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  }

  const subMaxNum = maxNum(array.slice(1));

  return array[0] > subMaxNum ? array[0] : subMaxNum;
};

console.log(`Max num in array is ${maxNum([100, 5, 1, 10, 7, 4])}`);
