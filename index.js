const app = require('express')()
const Player = require('./models/Player.js')
const bodyParser = require("body-parser")
app.use(bodyParser.json());

app.get('/home', (req, res) => {
    Player.find({})
    .then(players => {
        res.json(players)
    })
})

app.get("/home/player/first_name/:first_name", (req, res) =>{
    Player.find({first_name: req.params.first_name})
    .then(player => {
        res.json(player)
    })
})

app.get("/home/player/last_name/:last_name", (req, res) =>{
    Player.find({last_name: req.params.last_name})
    .then(player => {
        res.json(player)
    })
})


app.get("/home/teams/:team", (req, res) => {
    Player.find({"team.name" : req.params.team})
    .then(team => {
        res.json(team)
    })
})

app.post('/home', (req, res) => {
    Player.create(req.body)
        .then(player => {
            res.json(player)
        })
})
app.put ('/home/player/first_name/:first_name', (req, res) => {
    Player.findOneAndUpdate({first_name: req.params.first_name}, req.body, {new : true})
      .then(player => {
        res.json(player)
      })
  })

  app.delete ('/home/player/first_name/:first_name', (req, res) => {
    Player.findOneAndDelete({first_name: req.params.first_name})
      .then(player => {
        res.json(player)
      })
  })

  app.set("port", process.env.PORT || 4001);

  app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });