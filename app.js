var request = require('request');
var geocode = require('./utils/geocode')
var forecast = require('./utils/forecast')
forecast(34.780915,32.083148,(error,data)=>{
    console.log("Error",error)
    console.log("Data",data)
})
// geocode('Tel aviv',(error,data)=>{
//     console.log("Error",error)
//     console.log("data",data)
// })