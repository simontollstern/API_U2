const express = require('express');
const router = express.Router();

const beverages = require('./beverages.js');

router.get('/beverages', beverages.get);

module.exports = router;
