const request = require('request')
const converterDegree = require('../utils/convertDegree')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/30d4fcb9f68c9cbdd5118de3bb0acad4/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + converterDegree(body.currently.temperature) + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast