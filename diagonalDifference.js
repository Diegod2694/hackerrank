function diagonalDifference(arr) {
  const numberOfIterations = arr[0] * arr[0]
  const numberOfColumns = arr[0]
  console.log(numberOfIterations)
  const newArr = arr.slice(1)
  console.log('newArr', newArr)
  let matrix = []
  let row = []
  accRow = 0
  for (let i = 0; i < array.length; i++) {
    row[i] = []
    for (let j = accRow; j < array.length; j++) {
      row[i].push(arr[j])
    }
    accRow = accRow + numberOfColumns
    matrix.push(row[i])
    console.log('row[i]', row[i])
  }

}

const array = [ 3, 11, 2, 4, 4, 5, 6, 10, 8, -12 ]

console.log(diagonalDifference(array))