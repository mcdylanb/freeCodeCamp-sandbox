const repeatStringNumTimes = (str, num) => {
  if (num < 0) {
    str = "";
  } else {
    str = str.repeat(num);
  }
  return str;
};

console.log(repeatStringNumTimes("*", 10));
console.log(repeatStringNumTimes("abc", -3));
