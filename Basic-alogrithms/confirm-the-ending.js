function confirmEnding(str, target) {
  let dynamicString = target;

  let regex = new RegExp("." + target + "$", "i");

  return regex.test(str);
}

// test
confirmEnding("Bastian", "n");
