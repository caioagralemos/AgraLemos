const express = require('express')
const ejs = require('ejs')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('pages/home.ejs')
})

app.listen('3000', () => {
    console.log('live @ 3000')
})