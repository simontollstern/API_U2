const Review = require('../models/review.js');

const get = (req, res, next) => {
  Review.find()
    .then(reviews => res.send(reviews))
    .catch(error => next(error));
}

const post = (req, res, next) => {
  Review.create({
    beverageId: req.body.beverageId,
    title: req.body.title,
    content: req.body.content,
    rating: req.body.rating
  }).then(created => res.status(201).send(created))
    .catch(error => next(error));
}

const put = (req, res, next) => {
  Review.updateOne({ _id: req.params.id }, {
    beverageId: req.body.beverageId,
    title: req.body.title,
    content: req.body.content,
    rating: req.body.rating
  }, {
    new: true,
    upsert: true
  }).then(status => {
    if(status.upserted)
      res.status(201)
    else if(status.nModified)
      res.status(200)
    else
      res.status(204)
    res.send()
  }).catch(error => next(error))
}

const deleteReview = (req, res, next) => {
  Review.findByIdAndDelete(req.params.id).then(deleted => {
    if(deleted) return res.status(200).send(deleted);
    res.sendStatus(204);
  }).catch(error => next(error));
}

module.exports = {
  get,
  post,
  put,
  deleteReview
}
