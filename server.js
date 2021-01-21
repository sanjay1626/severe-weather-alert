var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv')
var exphbs = require('express-handlebars')
 var db = require("./models")
const PORT = process.env.PORT || 5000;
//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

 //link js files to eliminate 404 err code
 app.use(express.static('views'))

//load passport strategies
//require('./config/passport.js')
 require('./config/passport.js')(passport, db.user );


//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
 
 
 
app.get('/', function(req, res) {
 res.redirect('/signin')
   // res.send('Welcome to Passport with Sequelize');
 
});
 
//Models
var models = require("./models");
 
//Routes
 
var authRoute = require('./routes/auth.js')(app,passport);
 
 
//Sync Database
 
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
 
 
app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });