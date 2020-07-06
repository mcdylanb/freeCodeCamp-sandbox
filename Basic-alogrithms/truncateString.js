const truncateString = (str, num) => {
  let newStr = "";
  console.log(str.length);
  if (str.length > num) {
    newStr = str.substring(0, num);
    newStr += "...";
  } else {
    newStr = str;
  }

  str = newStr;
  return str;
};

// test
truncateString("dylan the great", 2);
