function diagonalDifference(arr) {
  const numberOfIterations = arr[0] * arr[0]
  const numberOfColumns = arr[0]
  let numberOfRows = arr[0]
  const newArr = arr.slice(1)
  let matrix = []
  let row = []
  let accRow = 0
  for (let i = 0; i < numberOfColumns; i++) {
    row[i] = []
    for (let j = accRow; j < numberOfRows; j++) {
      row[i].push(newArr[(j)])
    }
    accRow = accRow + numberOfColumns
    numberOfRows = numberOfRows + numberOfColumns
    matrix.push(row[i])
  }
  console.log(`matrix`, matrix)
  let first = 0
  for (let i = 0; i < numberOfColumns; i++) {
    for (let j = 0; j < numberOfColumns; j++) {
      if (i === j) {
        first = first + matrix[i][j]
        console.log(first)
      }
      if ( i === 0 )[
        
      ]
    }
  }
}

const array = [ 3, 11, 2, 4, 4, 5, 6, 10, 8, -12 ]

console.log(diagonalDifference(array))