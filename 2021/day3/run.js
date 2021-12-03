const fs = require("fs");
const path = require("path");

let readLines = fs.readFileSync(path.join(__dirname, "./data"), "utf-8").split("\n");

let oxygen = readLines;
let co2 = readLines;
let bit = 0;

while (oxygen.length > 1) {
  let countBit = [0, 0];
  for (let i = 0; i < oxygen.length; i++) {
    countBit[oxygen[i][bit]]++;
  }
  let highestBit = countBit[0] > countBit[1] ? "0" : "1";
  oxygen = oxygen.filter((line) => line[bit] === highestBit);
  bit++;
}
// so uglyyy
bit = 0;
while (co2.length > 1) {
  let countBit = [0, 0];
  for (let i = 0; i < co2.length; i++) {
    countBit[co2[i][bit]]++;
  }
  console.log(countBit);
  let highestBit = countBit[0] > countBit[1] ? "1" : "0";
  co2 = co2.filter((line) => line[bit] === highestBit);
  bit++;
}
console.log(co2, oxygen);
console.log(parseInt(oxygen[0], 2) * parseInt(co2[0], 2));

// let gamma = "";
// let epsilon = "";

// for (let bit of bits) {
//   if (bit[0] > bit[1]) {
//     gamma += "0";
//     epsilon += "1";
//   } else {
//     gamma += "1";
//     epsilon += "0";
//   }
// }

// console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
