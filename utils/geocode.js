var request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoicm9lZTAzMCIsImEiOiJjazI5M2VleTUwMzQ4M29wMnV0cHk2dXFrIn0.DyIk-WcyXZF2LY_u37FR9w"
    request({url , json:true},(error , {body})=>{
        if(error)
        {
            callback('enable to connect to location service',undefined)
        }
        else if(body.features.length === 0 ) callback('Unable to find location try again...',undefined)
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode