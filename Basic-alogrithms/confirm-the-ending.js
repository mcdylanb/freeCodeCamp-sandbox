function confirmEnding(str, target) {
  let regex = new RegExp("." + target + "$", "i");

  return regex.test(str);
}

// test
confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"));
