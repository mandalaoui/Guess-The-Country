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

