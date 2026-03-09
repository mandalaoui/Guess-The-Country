# Guess The Country

A simple web app where users guess a country based on three clues.

The app randomly chooses a country from a small dataset and gives you three clues.  
You enter your guess, the server checks if it's right, and shows the answer.

---

## Features

- Random country selection
- Three unique clues per country
- Guess submission
- Server validates your guess
- Displays correct/incorrect status
- Option to load a new country

The focus of the project is **functionality and clean structure**, not complex UI.

---

## Tech Stack

**Backend**  
- Node.js  
- Express  
- CORS

**Frontend**  
- HTML  
- Vanilla JavaScript  
- CSS


---

## Project Structure

<pre>
guess-the-country/
│
├── backend/
│   ├── controllers/
│   │   └── gameController.js      # Handles game API requests
│   ├── services/
│   │   └── gameService.js         # Game logic: country, clues, answer check
│   ├── routes/
│   │   └── gameRoutes.js          # API endpoint routes
│   ├── data/
│   │   └── countries.js           # Country list (name + clues)
│   ├── server.js                  # Backend entry point
│   └── package.json               # Node dependencies
│
├── frontend/
│   ├── index.html                 # Main web page
│   ├── app.js                     # UI + logic
│   ├── api.js                     # Fetches from backend
│   └── styles.css                 # Page styling
│
├── AI_USAGE.md                    # AI-related documentation
└── README.md                      # This file
</pre>

**Key folders:**
- `backend/` - Node.js & Express API, game logic.
- `frontend/` - Static files (HTML, JS, CSS).
- `AI_USAGE.md` - Documents AI involvement if any.

---

## Quick Start

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd guess-the-country
   ```

2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```

3. **Start the backend server:**
   ```sh
   npm start
   ```
   The backend will run at: [http://localhost:3000](http://localhost:3000)

4. **Run the frontend:**
   Open `frontend/index.html` in your browser  
   _or_  
   Use a static server (e.g. [VSCode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) to serve the `frontend/` folder.

---

## Project Overview

- **Backend**:  
  - `GET /api/country` — returns three clues for a random country  
  - `POST /api/guess` — checks if your guess is correct

- **Frontend**:  
  Fetches clues, lets you submit guesses, and shows answers instantly.  
  No frameworks—just HTML, CSS, vanilla JS.

---

## API Endpoints

### GET `/api/country`

Returns three clues for a random country.

Sample response:
```json
{
  "clues": [
    "Clue 1",
    "Clue 2",
    "Clue 3"
  ]
}
```

---

### POST `/api/guess`

Check if the player's guess matches the selected country.

Sample request body:
```json
{
  "guess": "Japan"
}
```

Sample response:
```json
{
  "correct": true,
  "answer": "Japan"
}
```

---

## Health Check

The backend provides a health endpoint:

```
GET /health
```

Response:
```json
{ "status": "ok" }
```

---

## Country Dataset

The data lives in:

```
backend/data/countries.js
```

It's a simple array of 10 country objects. Each includes a name and three clues. Example:

```js
{
  name: "Japan",
  clues: [
    "Land of the Rising Sun",
    "Capital is Tokyo",
    "Known for sushi"
  ]
}
```

The backend uses this to generate clues for every round.

---

## Example Game Flow

1. Frontend requests clues:
   ```
   GET /api/country
   ```
2. Backend returns three clues.
3. User enters a guess in the UI.
4. Frontend submits guess:
   ```
   POST /api/guess
   ```
5. Backend checks guess and responds if correct.

---

## AI Usage

This project was assisted by AI tools.

For more info about:
- tools/prompts used,
- code generated vs manual changes,

see:  
`AI_USAGE.md`

---

## Author

Omer Mandalaoui

