const request = require('supertest');

const app = require('../index.js');

describe('GET /', (done) => {
    it('first test', () => {
        request(app).get('/').expect('Hello World!', done);
    });
});