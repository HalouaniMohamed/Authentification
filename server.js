const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const User = require('./model/user')
const app = express()
const port = 5000

mongoose.connect('mongodb://localhost:27017/login-app-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true

})

app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'static')))

app.post('/api/register', async (req, res) => {
  console.log(req.body)
  res.json({ status: 'OK' })
})

app.listen(port, () => {
  console.log(`Connected to port ${5000}`)
})
