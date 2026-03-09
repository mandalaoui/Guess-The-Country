const countries = require('../data/countries.js');

let currentCountry = null;

/**
 * Randomly selects a country from the dataset and returns its clues.
 * Stores the selected country in memory for answer validation.
 * @returns {Array<string>} Array of clues for the selected country.
 */
function getCountryClues() {
    const randomIdx = Math.floor(Math.random() * countries.length);
    currentCountry = countries[randomIdx];
    return currentCountry.clues;
}

/**
 * Validates the user's guess against the currently selected country.
 * @param {string} userGuess
 * @returns {boolean} true if the guess is correct, false otherwise.
 */
function checkGuess(userGuess) {
    if (!currentCountry) {
        return false;
    }
    return (
        userGuess.trim().toLowerCase() === currentCountry.name.trim().toLowerCase()
    );
}

module.exports = {
    getCountryClues,
    checkGuess,
};