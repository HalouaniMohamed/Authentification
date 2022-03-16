const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const User = require('./model/user')
const bcrypt = require('bcryptjs')
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
  const { username, email, password } = req.body
  // const salt = bcrypt.genSaltSync(10)
  // const hash = bcrypt.hashSync(password, salt)
  // console.log(hash)
  res.json({ status: 'OK' })
})

app.listen(port, () => {
  console.log(`Connected to port ${5000}`)
})
