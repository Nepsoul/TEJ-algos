const backwardString = (string) => {
  let n = string.length;
  if (n <= 1) {
    console.log(string[0]);
  } else {
    console.log(string[n - 1]);
    backwardString(string.slice(0, -1));
  }
};
