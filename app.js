const bodyParser = require('body-parser')
const express = require('express')
const models = require('./models')
const passport = require('passport')
const expressSession = require('express-session')
var path = require('path')

const PORT = process.env.PORT || 8000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/bin', express.static('./bin'));
app.use(express.static(path.join(__dirname, '/public')))
app.use(expressSession(({ secret: 'secret', resave: false, saveUninitialized: true })))
app.use(passport.initialize())
app.use(passport.session())


// Load up all of the controllers
//NEED TO UNCOMMENT 
// const controllers = require('./controllers')
// app.use('/', controllers)
// app.get('*',(req, res) =>{
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// })

// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    })
})
