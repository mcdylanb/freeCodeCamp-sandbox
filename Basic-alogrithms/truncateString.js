const truncateString = (str, num) => {
  let newStr = "";
  console.log(str.length);
  if (str.length > num) {
    console.log("the string is too long");
    newStr = str.substring(0, num);
    console.log(`substring: ${newStr}`);
    newStr += "...";
    console.log(`substring: ${newStr}`);
  } else {
    newStr = str;
  }

  str = newStr;
  return str;
};

truncateString("dylan the great", 2);
