const factorial = (num) => {
  // Base case
  if (num === 1) {
    return 1;
  }

  // Recursive case
  return num * factorial(num - 1);;
}

console.log(factorial(4));