var request = require('request');
var geocode = require('./utils/geocode')
var forecast = require('./utils/forecast')


const address = process.argv[2]
if(!address)
{
    console.log("Please enter an address")
}
else{
    geocode(address,(error,data)=>{
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
}
