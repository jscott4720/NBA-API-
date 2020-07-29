const fetch = require("node-fetch");
const fs = require('fs')
let playerData = []
let counter = 0
for (i = 0 ; i <= 33; i++){
    let url = `https://www.balldontlie.io/api/v1/players?per_page=100&page=${i}`
    fetch(url)
    .then(res => res.json())
    .then(res => {
        counter++
        playerData.push(...res.data)
        if(counter >= 33 ){
            saveData(playerData)
        }
    })

}
function saveData (players){
    players = JSON.stringify(players)
    fs.writeFile('./db/players.json', players, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('success')
        }
    })
}



