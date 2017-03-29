'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const inventory = require('./public/data/inventory.json')

app.use(express.static('public'))

app.set('view engine', 'pug')

// define routes
app.get('/', (req, res, next) => {
  res.render('home', {currentPage: "home"})
})

// using express route params
app.get('/:pageName', (req, res, next) => {
  res.render(req.params.pageName, {currentPage: req.params.pageName, inventory})
})

// app.get('/inventory', (req, res, next) => {
//   res.render('index', {currentPage: "inventory"})
// })

app.listen(port, () => {
  console.log(`Listening on port: ${port}...`)
})
