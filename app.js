var request = require('request');
var geocode = require('./utils/geocode')
var forecast = require('./utils/forecast')



geocode('Tel aviv',(error,data)=>{
    if(error){
       return console.log("Error",error)
    }

    forecast(data.longitude,data.latitude,(error,forecastData)=>{
        if(error)
        {
            return console.log("Error",error)
        }
        console.log(data.location)
        console.log(forecastData)
    })




})