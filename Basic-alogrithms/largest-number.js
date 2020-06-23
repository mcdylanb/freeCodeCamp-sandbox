const largestOfFour = arr => {
  let listOfLN = [];
  for (x = 0; x < arr.length; x++) {
    let largestNumber = 0;
    for (y = 0; y < arr.length; y++) {
      if (arr[x][y] > largestNumber) {
        largestNumber = arr[x][y];
      }
    }
    listOfLN.push(largestNumber);
  }
  arr = listOfLn;
  return arr;
};

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
