// import mongoose from 'mongoose';
var express = require('express')
var cors = require('cors')
var app = express()
const mongoose = require('mongoose');

const home = require('./routes/home')
const dash = require('./routes/dash')
mongoose.connect('mongodb+srv://artijo:w8AZPv8kVxqcASuo@redirectapp.t6xzubf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
const storeUrl = require('./models/storeUrl')
const findUrl = require('./models/redirectUrl')


app.use(cors())
app.use(express.static('./public'))
app.use(express.json())
// app.use(express.bodyParser())
app.use(express.urlencoded())
// app.use(flash)
app.set('view engine', 'ejs')

app.get('/', home)
app.get('/admin',dash)
app.post('/addnew', storeUrl)
app.get('/:path',findUrl)

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})