const min = require('../lib/min');
const assert = require('assert');

describe('#min', () => {
  it('should return the min value of the array', () => {
    const value = min([3, 1, 2]);
    assert.equal(value, 1);
  })

  it('should return undefined when array is empty', () => {
    const value = min([]);
    assert.equal(value, undefined);
  })
})
