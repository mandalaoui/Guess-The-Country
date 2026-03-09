const connectDB = require("../db/mongo");

let currentCountry = null;

async function getCountryClues() {
    const db = await connectDB();
    const countries = await db.collection("countries").find().toArray();
    const randomIdx = Math.floor(Math.random() * countries.length);
    currentCountry = countries[randomIdx];
    return currentCountry.clues;
}

function checkGuess(userGuess) {
    if (!currentCountry) return false;

    return (
        userGuess.trim().toLowerCase() ===
        currentCountry.name.trim().toLowerCase()
    );
}

function getCurrentCountry() {
    return currentCountry;
}

module.exports = {
    getCountryClues,
    checkGuess,
    getCurrentCountry
};