function confirmEnding(str, target) {
  let dynamicString = target;
  console.log(dynamicString);

  let regex = new RegExp("." + target + "$", "i");
  console.log(regex);

  console.log(regex.test(str));

  return str;
}

confirmEnding("Bastian", "n");
