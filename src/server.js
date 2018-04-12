const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const User = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/view/index.html')
})

app.listen(4000, function () {
  console.log('Servidor rodando na porta 4000!');
});

app.use('/api/users',User.router)