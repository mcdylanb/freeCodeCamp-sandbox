const largestOfFour = arr => {
  //where we gonna place our list of largest numbers
  let listOfLN = [];

  //loops around the array
  for (x = 0; x < arr.length; x++) {
    let largestNumber = 0;
    //loops around the subarray of the lopped array
    for (y = 0; y < arr[x].length; y++) {
      //checks if the looped number of the subaaray is bigger then the initial and changes once true
      if (arr[x][y] > largestNumber) {
        largestNumber = arr[x][y];
      }
    }
    //puts all largestNumber of each array into a new array
    listOfLN[x] = largestNumber;
  }

  //copies the list and returns the answer
  arr = listOfLN;
  console.log(arr);
  return arr;
};

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
