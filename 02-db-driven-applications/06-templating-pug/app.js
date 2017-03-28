'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static('public'))

app.set('view engine', 'pug')

// define routes
app.get('/', (req, res, next) => {
  res.render('index', {currentPage: "home"})
})

app.get('/about', (req, res, next) => {
  res.render('about', {currentPage: "about"})
})

app.get('/inventory', (req, res, next) => {
  res.render('inventory', {currentPage: "inventory"})
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}...`)
})
