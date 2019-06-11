const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  beverageId: String,
  title: String,
  content: String,
  rating: String
});

const review = mongoose.model('review', reviewSchema);

module.exports = review;
