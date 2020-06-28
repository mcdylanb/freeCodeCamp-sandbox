const truncateString = (str, num) => {
  console.log(str.length);
  if (str.length > num) {
    console.log("the string is too long");
  } else {
    console.log("the string is alright.. printing...");
  }

  return str;
};

truncateString("dylan the great", 2);
