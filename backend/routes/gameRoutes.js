const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// GET /api/country - Returns clues for a randomly selected country
router.get('/country', gameController.getCountryClues);

// POST /api/guess - Validates the user's guess
router.post('/guess', gameController.submitGuess);

module.exports = router;