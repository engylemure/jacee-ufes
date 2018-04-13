const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('./config/mongoose')
const db = mongoose()
const User = require('./router/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/view/index.html')
})
app.use('/api/users', User.router)