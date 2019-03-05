const average = require('../lib/average');
const assert = require('assert');

describe('#Average', () => {
  it('should return the average of array', () => {
    const avg = average([1, 2, 3]);
    assert.equal(avg, 2);
  })

  it('should return 0 when the array is empty', () => {
    const avg = average([]);
    assert.equal(avg, 0);
  })
})
