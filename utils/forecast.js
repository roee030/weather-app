var request = require('request')
const forecast = (longitude, latitude,callback) => {
    const url = "https://api.darksky.net/forecast/30d4fcb9f68c9cbdd5118de3bb0acad4/"+latitude+","+longitude
    request({url:url,json:true},(error,response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}
module.exports = forecast