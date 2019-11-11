var path = require('path')
var express = require('express')
var app = express()

var publicDirectoryPath = path.join(__dirname,'../public')
console.log(publicDirectoryPath)
app.use(express.static(publicDirectoryPath))


app.get('/',(req,res)=>{
    res.send("Home page")
})
app.get('/help',(req,res)=>{
    res.send("Help page")
})
app.get('/about',(req,res)=>{
    res.send("About page")
})
app.get('/weather',(req,res)=>{
    res.send("Weather page")
})



app.listen(3000,()=>{
    console.log("The server is running on port 3000")
})