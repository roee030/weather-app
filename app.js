var request = require('request');

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9lZTAzMCIsImEiOiJjazI5M2VleTUwMzQ4M29wMnV0cHk2dXFrIn0.DyIk-WcyXZF2LY_u37FR9w"

request({url:url , json:true },(error, response) => {
    console.log(response.body.features[0].geometry.coordinates)
})