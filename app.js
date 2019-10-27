var request = require('request');

const url = "https://api.darksky.net/forecast/30d4fcb9f68c9cbdd5118de3bb0acad4/37.8267,-122.4233"

request({url:url},(error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})