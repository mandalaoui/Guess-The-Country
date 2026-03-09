const gameService = require('../services/gameService');

/**
 * Controller to handle GET /api/country
 * Returns a set of clues for a randomly selected country.
 */
const getCountryClues = (req, res) => {
    try {
        const clues = gameService.getCountryClues();
        res.json({ clues });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get clues.' });
    }
};

/**
 * Controller to handle POST /api/guess
 * Expects { guess: string } in body. Returns whether the guess is correct.
 */
const submitGuess = (req, res) => {
    const { guess } = req.body;
    if (!guess || typeof guess !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing guess.' });
    }

    const isCorrect = gameService.checkGuess(guess);
    // Return the correct answer as well
    const answer = gameService.currentCountry ? gameService.currentCountry.name : null;
    res.json({ correct: isCorrect, answer });
};

module.exports = {
    getCountryClues,
    submitGuess,
};