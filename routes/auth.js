var authController = require('../controllers/authcontroller.js');
var passport = require("../config/passport.js");
var db = require("../models");
 var passport = require('passport')
 var session = require('express-session')
 

module.exports = function(app) {
  app.use(session()); // session middleware
 app.use(require('flash')());
  
    app.get('/signup', authController.signup);
 
    app.get('/signin', authController.signin);

    app.post("/signup", function(req, res) {
      //db.User.create
    
      res.json(req.user).redirect('/signin');  

    })
 

  app.get('/dashboard',isLoggedIn, authController.dashboard);
  
  app.get('/logout',authController.logout);

  //app.post('/signin', passport.authenticate('local-signin', { 
  //          successRedirect: '/dashboard',
  //          badRequestMessage: 'Your message you want to change.', //missing credentials
  //          failureFlash: true 
  //}));

 //app.post('/signin',
 //passport.authenticate('local-signin'), function(req, res) {
 // // If this function gets called, authentication was successful.
 // //  // `req.user` contains the authenticated user.
 //  res.redirect('/dashboard/' + req.user.email);
 //});

 //app.post('/signin',
 //passport.authenticate('local-signin'),
 //function(req, res) {
 //  // If this function gets called, authentication was successful.
 //  // `req.user` contains the authenticated user.
 //  res.redirect('/dashboard/' + req.user.email);
 //});
app.post("/signin",
   //function(req,res,next) {
     passport.authenticate('local-signin'), function(req, res) {

      //what to do after auth
   
     // console.log(error);
     // console.log(user);
     // console.log(info);

     // if(error){
     //   res.status(401).send(error);
     // } else if (!user) {
     //          res.status(401).send(info)
     // } else {
     //   next ();
     // }

       res.json("hello");
       //res.status(401).send(info);
     }
  // }
  // ,
  // function (req, res) {
  //   res.status(200).redirect('/dashboard')
  // }
 );

//app.post('/signin', function(req, res, next) {
//  passport.authenticate('local-signin', {
//    sucessRedirect: '/dashboard',
//    failureRedirect: '/signin',
//    failureFlash: true
//  })(req, res, next)
//})
//Protect Route
  function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
    }

};