var path = require('path')
var express = require('express')
var app = express()

var publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))



app.get('/weather',(req,res)=>{
    res.send("Weather page")
})



app.listen(3000,()=>{
    console.log("The server is running on port 3000")
})