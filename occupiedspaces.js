// let n = 5;
// let y = ["c","c",".",".","c"];
// let t = [".","c","c",".","."];

// const c = 1
// const . = 1

function occupiedParking(n, yesterday, today) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (yesterday[i] === "C" && today[i] === "C") {
      count++;
    }
  }
  return count;
}

console.log(occupiedParking(5, "CC..C", ".CC.."));

123;

//decimal to binary
//
//subtract bases of 2 from decimal until you get 



function decToBinary(){
    let x = 0;
    for(x < 511) {
        if(y = 0){}
    }
    else {
        console.log("Too big")
    }
}