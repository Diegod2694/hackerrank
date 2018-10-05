function diagonalDifference(arr) {
  const numberOfIterations = arr[0] * arr[0]
  console.log(numberOfIterations)
  console.log(arr)
  let matrix = []
  for (let i = 1; i < numberOfIterations; i++) {
    matrix[i] = arr[i]
    console.log(matrix[i])
    for (let j = 1; j < numberOfIterations; j++) {
      console.log(arr[j])
      matrix[i][j] = arr[j]
      console.log(matrix[i][j])
    }
  }
  let first = []
  for (let i = 1; i < numberOfIterations; i++) {
    for (let j = 1; j < numberOfIterations; j++) {
      if (i === j) {
        first.push(arr[i][j])
      }
    }
  }
  return first
}

const array = [ 3, 11, 2, 4, 4, 5, 6, 10, 8, -12 ]

console.log(diagonalDifference(array))