var authController = require('../controllers/authcontroller.js');
var passport = require("../config/passport.js")
 
module.exports = function(app) {
    //rs
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
  
                                         

    //app.post('/signin', 
    //    passport.authenticate('local-signup'),
    //        { //need ro be a call back functuon
    //            successRedirect: '/dashboard',
    //            failureRedirect: '/signup'                                
    //        });


}
module.exports = function(app){
    app.post("/signin", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    })

}
 