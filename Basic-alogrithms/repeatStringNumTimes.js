const repeatStringNumTimes = (str, num) => {
  let newStr = "";
  if (num < 0) {
    str = "";
  } else {
    //iterate each number
    for (let x = 1; x <= num; x++) {
      //then runs this code adding the str to the newStr
      newStr += str;
    }
    //changes str into newStr
    str = newStr;
  }
  return str;
};

console.log(repeatStringNumTimes("*", 10));
// console.log(repeatStringNumTimes("abc", -3));
