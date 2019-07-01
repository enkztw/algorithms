const someArray = [1, 2, 3, 4, 5, 10, 12, 14, 15, 44, 45, 101, 128, 130, 132, 140, 141];


const binarySearch = (array, itemToFind) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guessedItem = array[mid];

    if (guessedItem === itemToFind) {
      return mid;
    }

    if (guessedItem > itemToFind) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

  }

  return null;
};

console.log(binarySearch(someArray, 1));
