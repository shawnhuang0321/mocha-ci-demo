const max = require('../lib/max');
const assert = require('chai').assert;

describe('#max', () => {
  it('should return the max value of the array', () => {
    const value = max([1, 3, 2]);
    assert.equal(value, 3);
  })

  it('should return undefined when array is empty', () => {
    const value = max([]);
    assert.isUndefined(value, 'max value is not undefined');
  })
})
