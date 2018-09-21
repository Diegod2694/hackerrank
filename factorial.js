// Recursive

const getFactorial = n => {
  if ( n > 1 ) {
    return n * getFactorial(n-1)
  }
  return 1
}

console.log(getFactorial(4))

// Iterative

const factorial = n => {
  let acc = n
  let multiplied = n
  for (let index = 1; index < n; index++) {
    multiplied -= 1
    acc = acc * multiplied
  }
  return acc
}

console.log(factorial(3))