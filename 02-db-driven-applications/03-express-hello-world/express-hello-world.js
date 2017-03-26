const express = require('express')
const app = express()

app.set('port', process.env.PORT || 8080)

// console.log(process.env)
const currentTime = () => {
  return new Date().toISOString()
}

app.get('/', (req, res, next) => {
  res.send(`<h1>Hello, world</h1>`)
})

app.get('/time', (req, res, next) => {
  console.log(`This page loaded at ${currentTime()}`)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})

// ## Requirements

// Make a Node.js program named `express-hello-world.js` that outputs "Hello World"
// to browsers making a GET request to the root (/) url.

// Also, to browsers that make a GET request to the /time url, send the current
// date and time in ISO format: `2015-12-31T23:59:59.999Z`.

// Finally, use an environment variable named `PORT` for the port number if one is
// provided. If one is not provided use 8080.

// i.e. The command below should start a server on the port 1337.

// ```bash
// PORT=1337 node express-hello-world.js
// ```

// and the command below should start a server on the port 8080.

// ```bash
// node express-hello-world.js
// ```
