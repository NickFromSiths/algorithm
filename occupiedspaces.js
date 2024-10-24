// let n = 5;
// let y = ["c","c",".",".","c"];
// let t = [".","c","c",".","."];

// const c = 1
// const . = 1

// function occupiedParking(n, yesterday, today) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (yesterday[i] === "C" && today[i] === "C") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(occupiedParking(5, "CC..C", ".CC.."));

//decimal to binary
//
//subtract bases of 2 from decimal until you get

function decToBinary() {
  let x = 256;
  if (x <= 511) {
    if (x >= 256) {
      let y = x - 256;
      console.log("1");
      if (y >= 128) {
        console.log("1");
        let z = y - 128;
        if (z >= 64) {
          console.log("1");
          let a = z - 64;
          if (a >= 32) {
            console.log("1");
            let b = a - 32;
            if (b >= 16) {
              console.log("1");
              let c = b - 16;
              if (c >= 8) {
                console.log("1");
                let d = c - 8;
                if (d >= 4) {
                  console.log("1");
                  let e = d - 4;
                  if (e >= 2) {
                    console.log("1");
                    let f = e - 2;
                    if (f >= 1) {
                      console.log("1");
                      return;
                    } else if (y < 1) {
                      console.log("0");
                      return;
                    }
                  } else if (e < 2) {
                    console.log("0");
                    return;
                  }
                } else if (d < 4) {
                  console.log("0");
                  return;
                }
              } else if (c < 8) {
                console.log("0");
                return;
              }
            } else if (b < 16) {
              console.log("0");
              return;
            }
          } else if (a < 32) {
            console.log("0");
            return;
          }
        } else if (z < 64) {
          console.log("0");
          return;
        }
      } else if (y < 128) {
        console.log("0");
        return;
      }
    } else if (x < 256) {
      console.log("0");
      return;
    }
  }
}
decToBinary();
//else {
//         console.log("Too big")
//     }

// if (y >= 128) {
//   console.log("1");
//   let z = y - 128;
// } else if (y < 128) {
//   console.log("0");
//   return;
// }
