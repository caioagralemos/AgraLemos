const express = require('express')
const ejs = require('ejs')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')

const projetos = require('./models/projetos.js')

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('pages/home.ejs', {projetos})
})

app.get('/projetos', (req, res) => {
    res.render('pages/projetos.ejs', {projetos})
})

app.get('/projetos/:id', (req, res) => {
    const { id } = req.params
    const projeto = projetos.find(p => p.id == id)
    res.render('pages/projetoshow.ejs', {projeto})
})


app.get('/escritorio', (req, res) => {
    res.render('pages/escritorio.ejs')
})

app.get('/contato', (req, res) => {
    res.render('pages/contato.ejs')
})

app.listen('21092', () => {
    console.log('live @ 21092')
})