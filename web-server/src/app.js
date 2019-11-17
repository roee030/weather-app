var path = require('path')
var express = require('express')
var app = express()
var hbs = require('hbs')
var publicDirectoryPath = path.join(__dirname,'../public')
var viewsPath = path.join(__dirname, '../templates/views')
var partialsPath = path.join(__dirname,'../templates/partials')


app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name:"roee angel"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name:"roee angel"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: "Help page",
        name:"roee angel"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: 404,
        error:"This page is not found"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})