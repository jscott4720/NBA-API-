const axios = require('axios');
const fs = require('fs')


axios.get('https://www.balldontlie.io/api/v1/players?per_page=100')
  .then( res => {
    let players = JSON.stringify(res)
    fs.writeFile()
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })
  .then( () => {
    // always executed
  });
