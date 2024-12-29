require('dotenv').config()
const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000
const dbConnection = require("./configDB/configDB")

// middleWare
app.use(cors())
app.use(express.json())

// db connection
dbConnection()

app.get('/', (req, res) => {
  res.send('Explore Mongoose...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})