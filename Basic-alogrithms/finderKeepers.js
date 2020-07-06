const findElement = (arr, func) => {
  console.log(func);
  console.log(arr);
  let num = 0;
  let answer = 0;
  for (let x = 0; x < arr.length; x++) {
    num = arr[x];
    if (func(num) == true) {
      answer = num;
      console.log(`this num : ${num} passes`);
      break;
    }
    asnwer = undefined;
  }
  return answer;
};

console.log(
  findElement([1, 3, 5, 9], function(num) {
    return num % 2 === 0;
  })
);
