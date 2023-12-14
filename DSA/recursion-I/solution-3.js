const sumNums = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return num + sumNums(num - 1);
  }
};
