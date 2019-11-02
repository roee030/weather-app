const forecast = (longitude, latitude,callback) => {
    const url = "https://api.darksky.net/forecast/30d4fcb9f68c9cbdd5118de3bb0acad4/"+latitude+","+longitude
    request({url:url,json:true},(error,response) => {
        if(error) callback("There is an error connection",undefined)
        else if( response.bode.error) callback("enable to reach the location",undefined)
        else callback(undefined,response.body.daily.data[0].summary + 'Its currently ' + response.body.currently.temperature + ' degree out. There is a '+response.body.currently.precipProbability + '% chance of rain.')

    })
}