const app = require('express')()
const Player = require('./models/Player.js')


app.get('/home', (req, res) => {
    Player.find({})
    .then(players => {
        res.json(players)
    })
})

app.get("/home/team", (req, res) =>{
    Player.find({})
    .then(team => {
        res.json(team)
    })
})

app.listen(4001, () => {
    console.log("listening..")
})