var request = require('request');

// const url1 = "https://api.darksky.net/forecast/30d4fcb9f68c9cbdd5118de3bb0acad4/37.8267,-122.4233"

// request({url:url1 , json:true},(error, response) => {
//      if(error) console.log("There is an Error")
//      else if( response.bode.error) console.log("enable to reach the location")
//      else
//     console.log(response.body.daily.data[0].summary + 'Its currently ' + response.body.currently.temperature)
// })


const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Tel%20Aviv.json?access_token=pk.eyJ1Ijoicm9lZTAzMCIsImEiOiJjazI5M2VleTUwMzQ4M29wMnV0cHk2dXFrIn0.DyIk-WcyXZF2LY_u37FR9w"

request({url:url2 , json:true },(error, response) => {
    if(error) console.log('enable to connect to location service')
    else if(response.body.features.length === 0 ) console.log('Unable to find location try again...')
    console.log(response.body.features[0].center)
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude,longitude)
})


const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoicm9lZTAzMCIsImEiOiJjazI5M2VleTUwMzQ4M29wMnV0cHk2dXFrIn0.DyIk-WcyXZF2LY_u37FR9w"
    request({url:url , json:true},(error , response)=>{
        if(error)
        {
            callback('enable to connect to location service',undefined)
        }
        else if(response.body.features.length === 0 ) callback('Unable to find location try again...',undefined)
        else{
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Tel Aviv',(error,data)=>{
    console.log("Error",error)
    console.log("data",data)
})