const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const teamSchema = new Schema ({})

const playerSchema = new Schema({
  id: Number,
  first_name: String,
  height_feet: Number,
  height_inches: Number,
  last_name: String,
  position: String,
  team: {
    id: Number,
    abbreviation: String,
    city: String,
    conference: String,
    division: String,
    full_name: String,
    name: String,
  },
  weight_pounds: Number,
});

Player = mongoose.model("Player", playerSchema);

module.exports = Player;
