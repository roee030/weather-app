var request = require('request');
var geocode = require('./utils/geocode')
var forecast = require('./utils/forecast')

forecast(337.8267,152.4233,(error,data)=>{
    console.log("Error",error)
    console.log("Data",data)
})
// geocode('Tel aviv',(error,data)=>{
//     console.log("Error",error)
//     console.log("data",data)
// })