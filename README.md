# Project-6
NBA-API
## NBA-API
This NBA API will allow you to search through all players in NBA history (after 1978) by name and also allow you to search by franchise.
## Prerequisites
- API
- Express
- Mongoose
- Models
- Restful routing
- Node
## API Routes
USE CRUD
- Create: Create a new player 
- Read: find an existing player or team
- Update: update the name of a 
- Delete: deleting an unwanted player
- Check all CRUD methods using Postman (www.postman.com OR download at https://www.postman.com/downloads/)
Define routes here:
- players: ('/home') will show all players
- first name: ('/drinks/player/first_name/:first_name') will find a player or multiple players based on their first name(use correct capitalization)
- last name: ('/drinks/player/last_name/:last_name') will find a player or multiple players based on their last name (use correct capitalization)
- team: ('/home/teams/:team') will show one franchise and every player to play for that franchise (use correct capitalization)
## Installations
- Express
- Mongoose
- Body-parser
- Node
## Issues
- I had an issue trying to use Axios and decided to switch to the fetch mothod 
- The main hiccup I had was trying to import every player from the API into a JSON file so I could seed it.