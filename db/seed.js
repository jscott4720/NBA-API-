const Player = require("../models/Player");
const playersJSON = require("./players.json");

const playerData = playersJSON.map((item) => {
  player = {};
  player.id = item.id;
  player.first_name = item.first_name;
  player.height_feet = item.height_feet;
  player.height_inches = item.height_inches;
  player.last_name = item.last_name;
  player.position = item.position;
  player.team = item.team;
  player.weight_pounds = item.weight_pounds;
  return player;
});

Player.deleteMany({}).then(() => {
  Player.create(playerData).then((players) => {
    console.log("hello world")
    console.log(players);
    process.exit();
  });
});
