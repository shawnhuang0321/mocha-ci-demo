// const app = require('../app');
import app from '../app';
const assert = require('chai').assert;
// const request = require('supertest');
import request from 'supertest';

describe('#Test API', () => {
  it('Return a user Object', async () => {
    const response = await request(app).get('/api/user');
    assert.isDefined(response);
    assert.isObject(response.body);
    const user = response.body.user;
    // user.name
    assert.equal(user.name, 'Jack');
    assert.isString(user.name);
    // user.age
    assert.equal(user.age, 29);
    assert.isNumber(user.age);
  })
})
