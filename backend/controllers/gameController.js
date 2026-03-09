const gameService = require('../services/gameService');

/**
 * Controller to handle GET /api/country
 * Returns a set of clues for a randomly selected country.
 */
const getCountryClues = async (req, res) => {
    try {
        const clues = await gameService.getCountryClues();
        res.json({ clues });
    } catch (error) {
        console.error("GET /api/country failed:", error);
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

    const currentCountry = gameService.getCurrentCountry();
    if (!currentCountry) {
        return res.status(400).json({ error: 'No active country. Please request clues first.' });
    }

    const isCorrect = gameService.checkGuess(guess);
    res.json({ correct: isCorrect, answer: currentCountry.name });
};

module.exports = {
    getCountryClues,
    submitGuess,
};