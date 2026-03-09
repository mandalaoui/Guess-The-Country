import { getCountryClues, submitGuess } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const cluesList = document.getElementById('clues-list');
    const guessForm = document.getElementById('guess-form');
    const guessInput = document.getElementById('guess-input');
    const resultMessage = document.getElementById('result-message');
    const nextCountryBtn = document.getElementById('next-country-btn');

    // Utility: clear current clues & display given array of strings
    function displayClues(clues) {
        cluesList.innerHTML = '';
        clues.forEach(clue => {
            const li = document.createElement('li');
            li.textContent = clue;
            cluesList.appendChild(li);
        });
    }

    // Fetch and display clues on page load or when requested
    async function loadClues() {
        try {
            const data = await getCountryClues();
            if (data.clues && Array.isArray(data.clues)) {
                displayClues(data.clues);
            } else {
                cluesList.innerHTML = '<li>Failed to load clues.</li>';
            }
        } catch (err) {
            cluesList.innerHTML = '<li>Error loading clues.</li>';
        }
        resultMessage.textContent = '';
        guessInput.value = '';
    }

    // Handle guess form submission
    guessForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const guess = guessInput.value;
        resultMessage.textContent = '';
        try {
            const res = await submitGuess(guess);
            if (res && typeof res.correct === 'boolean') {
                resultMessage.textContent = res.correct ? 'Correct!' : 'Wrong.';
                // Optionally, can reset/load clues for new round if needed:
                // if (res.correct) await loadClues();
            } else {
                resultMessage.textContent = 'Unexpected response.';
            }
        } catch (err) {
            resultMessage.textContent = 'Error submitting guess.';
        }
    });

    // Add click event to Next Country button
    nextCountryBtn.addEventListener('click', () => {
        loadClues();
    });

    // Initial load
    loadClues();
});
