function reverseString(str) {
  let newStr;
  let reversedStr = [];

  //splits string into array
  newStr = str.split("");
  console.log(newStr);

  //loops all elements of splitted string and adds to new string
  for (let x = 0; x < newStr.length; x++) {
    console.log(`this is what x is ${newStr[x]})`);
    reversedStr.unshift(newStr[x]);
  }
  console.log(`this is the reversedStr ${reversedStr}`);
  //toString has problems with commas
  // str = reversedStr.toString();

  str = reversedStr.join("");
  return str;
}

console.log(`output: ${reverseString("hello")}`);
console.log(`type of str is: ${typeof reverseString("hello")}`);
