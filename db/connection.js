const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/nba", {useNewUrlParser: true })

module.exports = mongoose