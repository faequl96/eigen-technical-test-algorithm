let matrixNxN = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

let firstDiagonal = 0;
let secondDiagonal = 0;

let result = 0;

function diagonalhasil(matrixNxN) {
  for (let i = 0; i < matrixNxN.length; i++) {
    firstDiagonal += matrixNxN[i][i];
    secondDiagonal += matrixNxN[i][matrixNxN.length - 1 - i];
  }
  result = Math.abs(firstDiagonal - secondDiagonal);
}

diagonalhasil(matrixNxN);

console.log(result);
