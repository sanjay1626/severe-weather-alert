var authController = require('../controllers/authcontroller.js');
var passport = require("../config/passport.js");
var db = require("../models");
 
module.exports = function(app) {
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post("/signin", passport.authenticate("local"), function(req, res) {
       res.json(req.user);
       
    })
 
 
 
}