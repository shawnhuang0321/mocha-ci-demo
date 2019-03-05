const min = require('../lib/min');
const assert = require('chai').assert;

describe('#min', () => {
  it('should return the min value of the array', () => {
    const value = min([3, 1, 2]);
    assert.equal(value, 1);
  })

  it('should return undefined when array is empty', () => {
    const value = min([]);
    assert.isUndefined(value, 'min value is not undefined');
  })
})
