const factorial = (num) => {
  // Base case
  if (num === 1) {
    return 1;
  }

  // Recursive case
  return num * factorial(num - 1);;
}

console.log(`Factorial of 4 is ${factorial(4)}`);

const atm = (amount, values) => {
  if (values.length === 0) {
    return ''
  }

  const curr = values[0]
  const left = amount % curr
  const quantity = (amount - left) / curr
  
  if (values.length === 1 && left !== 0) {
    throw new Error('Cant giveaway')
  }

  values.shift()
  return `|${curr} - ${quantity} |` + atm(left, values)
}

atm(72, [10, 5, 2, 1])