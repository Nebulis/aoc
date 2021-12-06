const fs = require("fs");
const path = require("path");

let fishes = fs
  .readFileSync(path.join(__dirname, "./data"), "utf-8")
  .split("\n")
  .flatMap((line) => line.split(",").map((value) => parseInt(value, 10)));

// for (let i = 1; i <= 256; i++) {
//   let newFish = 0;
//   let fishLength = fishes.length;
//   for (let i = 0; i < fishLength; i++) {
//     if (fishes[i] === 0) {
//       fishes[i] = 6;
//       fishes.push(8);
//     } else {
//       fishes[i]--;
//     }
//   }
//   //   console.log(`day${i} ${fishes.join(",")}`);
//   console.log(`day${i}`);
// }
// console.log(fishes.length);

let map = new Map();
for (let fish of fishes) {
  const currentValue = map.get(fish);
  if (currentValue) map.set(fish, currentValue + 1);
  else map.set(fish, 1);
}
console.log(map);

for (let i = 1; i <= 256; i++) {
  let newMap = new Map();
  map.forEach((value, key) => {
    let next;
    if (key === 0) {
      let currentValue = newMap.get(6) || 0;
      newMap.set(6, currentValue + value);
      newMap.set(8, value);
    } else {
      let currentValue = newMap.get(key - 1) || 0;
      newMap.set(key - 1, currentValue + value);
    }
  });
  map = newMap;
  console.log(`day${i}`);
  console.log(map);
}

let sum = 0;
map.forEach((value) => {
  sum += value;
});
console.log(map, sum);
