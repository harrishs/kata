const generateBoard = function(queen1, queen2) {
  let board = [];
  for (let i = 0; i < 10; i++) {
    let arrIn = [];
    for (let j = 0; j < 10; j++) {
      if (i === queen1[0] && j === queen1[1] || i === queen2[0] && j === queen2[1]) {
        arrIn.push(1);
      } else {
        arrIn.push(0);
      }
    }
    board.push(arrIn);
  }
  return board;
};

const queenThreat = function(board) {
  console.log(board);
  let queen = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        queen.push([i,j]);
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (queen[0][0] + i === queen[1][0] || queen[1][0] + i === queen[0][0]) {
      return true;
    } else if (queen[0][1] + i === queen[1][1] || queen[1][1] + i === queen[0][1]) {
      return true;
    } else if (queen[0][0] - queen[1][0] === queen[0][1] - queen[1][1]) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(queenThreat(generateBoard([2,8], [4,5])));