// function decToBinary() {
//   let x = 510;
//   if (x <= 511) {
//     if (x >= 256) {
//       let y = x - 256;
//       console.log("1");
//       if (y >= 128) {
//         console.log("1");
//         let z = y - 128;
//         if (z >= 64) {
//           console.log("1");
//           let a = z - 64;
//           if (a >= 32) {
//             console.log("1");
//             let b = a - 32;
//             if (b >= 16) {
//               console.log("1");
//               let c = b - 16;
//               if (c >= 8) {
//                 console.log("1");
//                 let d = c - 8;
//                 if (d >= 4) {
//                   console.log("1");
//                   let e = d - 4;
//                   if (e >= 2) {
//                     console.log("1");
//                     let f = e - 2;
//                     if (f >= 1) {
//                       console.log("1");
//                       return;
//                     } else if (f < 1) {
//                       console.log("0000000000000");
//                       return;
//                     }
//                   } else if (e < 2) {
//                     console.log("000");
//                     return;
//                   }
//                 } else if (d < 4) {
//                   console.log("00");
//                   return;
//                 }
//               } else if (c < 8) {
//                 console.log("000");
//                 return;
//               }
//             } else if (b < 16) {
//               console.log("0000000");
//               return;
//             }
//           } else if (a < 32) {
//             console.log("00");
//             return;
//           }
//         } else if (z < 64) {
//           console.log("00000");
//           return;
//         }
//       } else if (y < 128) {
//         console.log("000");
//         return;
//       }
//     } else if (x < 256) {
//       console.log("0000");
//       return;
//     }
//   }
// }
// decToBinary();

function binaryToDecimal() {}

function decToBinary() {
  for (let x = 0; x <= 511; x++) {
    let binary = "";

    // Calculate binary representation
    for (let i = 8; i >= 0; i--) {
      let bit = (x >> i) & 1; // Get the ith bit
      binary += bit; // Append the bit to the binary string
    }

    console.log(`Decimal: ${x}, Binary: ${binary}`);
  }
}

decToBinary();
