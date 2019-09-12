const sum = (array) => {
    if (array.length === 0) {
        return 0;
    }

    return array.shift() + sum(array);
}

console.log(`Sum of array is ${sum([5, 4, 1, 3, 7])}`);