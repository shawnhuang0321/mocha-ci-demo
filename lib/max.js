const max = function(arr) {
  const sort = arr.sort((a, b) => b-a);
  return sort[0];
}

module.exports = max;
