function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let count = -1;

  return function() {
    count++;
    return list[count]; 
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

const countdownGenerator = function (x) {
  let count = x+1;

  return function(){
    count--;
    if (count <= 0 ){
      console.log("Rockets already gone, bub!")
    }
    else{
      console.log("T-minus " + count);
    }
  }
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!