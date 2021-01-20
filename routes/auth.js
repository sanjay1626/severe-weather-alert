var authController = require('../controllers/authcontroller.js');
var passport = require("../config/passport.js");
var db = require("../models");
 
module.exports = function(app) {
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
    app.get('/logout',authController.logout);


    app.post("/signup", passport.authenticate("local-signup"), function(req, res) {
        successRedirect: '/dashboard';
 
        failureRedirect: '/signup'
       res.json(req.user);
       
    });
    

app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signin'
    }
 
));
   
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    //app.get('/logout',authController.logout);
    





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
    
  function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
}
}