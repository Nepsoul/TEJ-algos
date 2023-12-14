function flatArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let curVal = array[i];

    if (!Array.isArray(curVal)) {
      result.push(curVal);
    } else {
      result = result.concat(flatArray(curVal));
    }
  }

  return result;
}
