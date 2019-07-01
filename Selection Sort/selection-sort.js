const someArray = [4, 112, 132, 5, 10, 2, 3, 14, 15, 65, 54, 42, 128, 130, 129, 140];

const findSmallest = (array) => {
  let smallestItem = array[0];
  let smallestIndex = 0;

  for (const [index, item] of array.entries()) {
    if (item < smallestItem) {
      smallestItem = item;
      smallestIndex = index;
    }
  }

  return smallestIndex;
};

const selectionSort = (array) => {
  const sortedArray = [];
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    const smallestItem = findSmallest(array);

    // Adding smallest item to the beginning of a new array
    sortedArray.push(array[smallestItem]);

    // Removing smallest item of initial array
    array.splice(smallestItem, 1);
  }

  return sortedArray;
};

console.log(selectionSort(someArray));
