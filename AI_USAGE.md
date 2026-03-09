cursor:

1. 

Create a small dataset for the game.
Each country should have this structure:

{
  name: "Country Name",
  clues: [
    "clue 1",
    "clue 2",
    "clue 3"
  ]
}

Generate 10 countries with simple clues.

Export the dataset so it can be imported by other modules.


-------------------------------------------------------------


2. 

services/gameService.js

Responsibilities:

1. Select a country from the dataset
2. Return only the clues
3. Keep track of the current country in memory
4. Validate a user's guess

Functions I expect:

getCountryClues()
checkGuess(userGuess)

The service should import the dataset from 
@countries.js (1-84) 

-------------------------------------------------------------

3.

controllers/gameController.js

Responsibilities:

1. Handle request to get clues
2. Handle request to submit a guess

Endpoints expected later:

GET /api/country
POST /api/guess

The controller should call the functions from @gameService.js (1-33) .

-------------------------------------------------------------

4.

routes/gameRoutes.js

Routes:

GET /api/country → returns the clues

POST /api/guess → checks the user's guess

The routes should call the functions from @gameController.js (1-33) .

-------------------------------------------------------------

5.

server.js

Requirements:

- Use Express
- Enable JSON parsing middleware
- Add a health check endpoint: GET /health
- mount routes under /api - @gameRoutes.js (1-11) 

-------------------------------------------------------------

6.

Create API requests for:

@gameRoutes.js (1-11) 

@gameController.js (1-33) 

@server.js (1-20) 



Health Check

Get Random Country Clues

Submit Guess - Example Correct-Looking Guess

Submit Guess - Wrong Guess

Submit Guess - Empty JSON Body

Submit Guess - Missing guess Field

Submit Guess - Non-String Guess

-------------------------------------------------------------

7.

Create the file index.html for a very simple "Guess The Country" web application.

Context:
This assignment requires a minimal UI where a user sees three clues about a country, enters a guess, and submits it.

Requirements for the HTML page:
- Use plain HTML only.
- No frameworks or libraries.
- Link to styles.css.
- Load app.js as a module script.

The page should include:
1. A main title: "Guess The Country"
2. A section that displays exactly three clues
3. A text input where the user can type a country name
4. A submit button
5. An area where the result message will appear

Suggested structure:
- Header with title
- Clues section with an unordered list
- Guess form with input and button
- Result message container

-------------------------------------------------------------

8.

create styles.css for:
@index.html (1-35) 
use light blue colors
adjust for small, big screens, and mobile

-------------------------------------------------------------

9.

Create app.js for the page.

Use @api.js (1-26) 

On page load:
fetch the clues and display them in cluesList.

When the user submits the form:
read the guess from guessInput,
send it to the backend,
and display the result in #resultMessage ("Correct!" or "Wrong.").
