const express = require('express')
const cors = require('cors')
const app = express()
const sessions = require('express-session');
const mongoose = require('mongoose');

const home = require('./routes/home')
const dash = require('./routes/dash')
const login = require('./routes/login')
const logout = require('./routes/logout')
mongoose.connect('mongodb+srv://artijo:w8AZPv8kVxqcASuo@redirectapp.t6xzubf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
const storeUrl = require('./models/storeUrl')
const findUrl = require('./models/redirectUrl')


app.use(cors())
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')
app.use(sessions({
    secret: "secrctekeyredirectapp",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))
app.get('/', home)
app.get('/admin',dash)
app.post('/admin/login',login)
app.get('/admin/logout',logout)
app.post('/addnew', storeUrl)
app.get('/:path',findUrl)

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})