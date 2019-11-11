var express = require('express')
var app = express()

app.get('/',(req,res)=>{
    res.send("Home page")
})


app.listen(3000,()=>{
    console.log("The server is running on port 3000")
})