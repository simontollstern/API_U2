const express = require('express');
const router = express.Router();

const beverages = require('./beverages.js');
const reviews = require('./reviews.js');

router.get('/beverages', beverages.get);
router.get('/reviews', reviews.get);
router.post('/reviews', reviews.post);
router.delete('/reviews/:id', reviews.deleteReview);

module.exports = router;
