var request = require('request');

// const url1 = "https://api.darksky.net/forecast/30d4fcb9f68c9cbdd5118de3bb0acad4/37.8267,-122.4233"

// request({url:url1 , json:true},(error, response) => {
//      if(error) console.log("There is an Error")
//      else if( response.bode.error) console.log("enable to reach the location")
//      else
//     console.log(response.body.daily.data[0].summary + 'Its currently ' + response.body.currently.temperature)
// })


const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9lZTAzMCIsImEiOiJjazI5M2VleTUwMzQ4M29wMnV0cHk2dXFrIn0.DyIk-WcyXZF2LY_u37FR9w"

request({url:url2 , json:true },(error, response) => {
    console.log(response.body.features[0].center)
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude,longitude)
})