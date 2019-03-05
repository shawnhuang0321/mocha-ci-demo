const min = function (arr) {
  const sort = arr.sort((a, b) => a - b);
  return sort[0];
}

module.exports = min;