var authController = require('../controllers/authcontroller.js');
var passport = require("../config/passport.js");
var db = require("../models");
 
module.exports = function(app) {
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post("/signin", passport.authenticate("local"), function(req, res) {
       res.json(req.user);
       
    })
   
    app.get('/dashboard',authController.dashboard);
    
    // Route for getting some data about our user to be used client side
  app.get("/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
    
 
}