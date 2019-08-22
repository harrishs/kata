const generateBoard = function(queen1, queen2){
  let board = [];
  for (let i = 0; i < 10; i++){
    let arrIn = []
    for (let j = 0; j < 10; j++){
      if (i === queen1[0] && j === queen1[1] || i === queen2[0] && j === queen2[1]){
        arrIn.push(1);
      }
      else{
        arrIn.push(0);
      }
    }
    board.push(arrIn);
  }
  return board;
}

