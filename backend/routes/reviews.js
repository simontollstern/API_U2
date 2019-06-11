const Review = require('../models/review.js');

const get = (req, res, next) => {
  Review.find().then(reviews => {
    res.send(reviews)
  })
}

const post = (req, res, next) => {
  Review.create({
    beverageId: req.body.beverageId,
    title: req.body.title,
    content: req.body.content,
    rating: req.body.rating
  })
}

module.exports = {
  get,
  post
}