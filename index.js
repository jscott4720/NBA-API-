const app = require('express')()
const Player = require('./models/Player.js')


app.get('/home', (req, res) => {
    Player.find({})
    .then(players => {
        res.json(players)
    })
})

app.get("/home/team/:id", (req, res) =>{
    Player.find(req.params)
    .then(team => {
        res.json(team)
    })
})

app.listen(4001, () => {
    console.log("listening..")
})