const express = require('express')
const dotenv = require('dotenv')
const socket = require('./socket')

const app = express()

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

app.get('/', (req, res) => {
  res.json({ status: 200, message: 'Service is OK.' })
  res.end()
})

server = app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
})

socket(server)  //Run Socket
