var exports = module.exports = {}
 var passport = require("../config/passport.js")
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}