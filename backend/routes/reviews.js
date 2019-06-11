const Review = require('../models/review.js');

const get = (req, res, next) => {
  Review.find().then(reviews => {
    res.send(reviews)
  })
}

const post = (req, res, next) => {
  console.log(req.body);
  Review.create({
    beverageId: req.body.beverageId,
    title: req.body.title,
    content: req.body.content,
    rating: req.body.rating
  }).then(() => res.status(201).send());
}

const deleteReview = (req, res, next) => {
  console.log('deleting ' + req.params.id)
  Review.findByIdAndRemove(req.params.id).exec();
}

module.exports = {
  get,
  post,
  deleteReview
}
