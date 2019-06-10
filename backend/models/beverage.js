const mongoose = require('mongoose');

const beverageSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  productNumber: String,
  nameBold: String,
  nameThin: String,
  description: String,
  usage: String,
  taste: String
})

const beverage = mongoose.model('beverage', beverageSchema);

module.exports = beverage;
