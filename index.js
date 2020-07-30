const app = require('express')()
const Player = require('./models/Player.js')


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

app.get("/home/teams/:team", (req, res) => {
    Player.find({"team.name" : req.params.team})
    .then(team => {
        res.json(team)
    })
})

app.listen(4001, () => {
    console.log("listening..")
})