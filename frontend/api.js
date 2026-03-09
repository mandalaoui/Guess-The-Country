const BASE_URL = "http://localhost:3000/api";

/**
 * Fetch clues for a randomly selected country from the backend.
 * @returns {Promise<{clues: string[]}>}
 */
export async function getCountryClues() {
    const response = await fetch(`${BASE_URL}/country`);
    return response.json();
}

/**
 * Submit the user's country guess to the backend.
 * @param {string} guess
 * @returns {Promise<{correct: boolean, answer: string}>}
 */
export async function submitGuess(guess) {
    const response = await fetch(`${BASE_URL}/guess`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ guess })
    });
    return response.json();
}