const average = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const sum = arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    })
    return sum / arr.length;
  }
}

module.exports = average;
