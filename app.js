var request = require('request');
var geocode = require('./utils/geocode')
// const url1 = "https://api.darksky.net/forecast/30d4fcb9f68c9cbdd5118de3bb0acad4/37.8267,-122.4233"

// request({url:url1 , json:true},(error, response) => {
//      if(error) console.log("There is an Error")
//      else if( response.bode.error) console.log("enable to reach the location")
//      else
//     console.log(response.body.daily.data[0].summary + 'Its currently ' + response.body.currently.temperature)
// })



geocode('Tel aviv',(error,data)=>{
    console.log("Error",error)
    console.log("data",data)
})