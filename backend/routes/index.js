const express = require('express');
const router = express.Router();

const beverages = require('./beverages.js');
const reviews = require('./reviews.js');

router.get('/beverages', beverages.get);
router.get('/beverages/:id', beverages.getById);
router.get('/reviews', reviews.get);
router.get('/reviews/:id', reviews.getById);
router.get('/beverage/:id/reviews', reviews.getReviewsById)
router.post('/reviews', reviews.post);
router.put('/reviews/:id', reviews.put);
router.delete('/reviews/:id', reviews.deleteReview);

module.exports = router;
