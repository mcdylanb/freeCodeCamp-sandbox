function factorialize(num) {
  let x, y, z;
  y = 1;

  if (num == 0) {
    num = 1;
  } else {
    for (x = 1; x <= num; x++) {
      console.log(x);
      z = x * y;
      y = z;
    }
    num = z;
  }
  return num;
}

factorialize(5);
console.log(factorialize(0));

// function factorialize(num) {
//   for (var product = 1; num > 0; num--) {
//     product *= num;
//   }
//   return product;
// }
