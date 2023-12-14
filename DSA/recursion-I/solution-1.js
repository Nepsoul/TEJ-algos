const countToTen = (number) => {
  if (number >= 10) {
    console.log(number);
  } else {
    console.log(number);
    countToTen(number + 1);
  }
};
