const sinon = require('sinon');

const mongoose = require('mongoose');
//mongoose.set('debug', true);
require('sinon-mongoose');

const app = require('../index.js');

const agent = require('supertest').agent(app);
const expect = require('chai').expect;

const Review = require('../models/review');

let reviewMock = sinon.mock(Review);

beforeEach(() => {
  console.log('beforeEach');
  reviewMock.restore();
})

afterEach(() => {
  console.log('afterEach');
  reviewMock.verify();
})

describe('Review Integration Tests', () => {
  const request = {
    'beverageId': '1',
    'title': 'title',
    'content': 'content',
    'rating': '1'
  }

  const expected = {
    "test": "????"
  };

  describe('reviews.get', () => {
    it('Should return all reviews', done => {
      reviewMock
        .expects('find')
        .resolves([expected]);

      agent
        .get('/reviews')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.eql([expected]);
          done();
        });
    })
  })

  describe('reviews.post', () => {
    it('Should create a new review', done => {
      reviewMock
        .expects('create')
        .withArgs(request)
        .resolves(expected);

      agent
        .post('/reviews')
        .send(request)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          done();
        });
    })
  })
});
