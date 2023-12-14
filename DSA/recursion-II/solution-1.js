function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let curVal = array[i];

    if (!Array.isArray(curVal)) {
      sum += curVal;
    } else {
      sum += arraySum(curVal);
    }
  }

  return sum;
}
