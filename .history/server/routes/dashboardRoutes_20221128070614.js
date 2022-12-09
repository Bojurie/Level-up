var express = require('express');
var router = express.Router();

// app.set('views', 'views')
// app.set('view engine', 'ejs' );

/* GET shop page. */
router.get('/', function(req, res, next) {
  const heading = 'Thnk You For Your Message';
  const title = 'Dash Board'
   res.render('dashboard', {title, heading});

     // Update User Info
  updateUserInfo = (req, res) => {
  User.update({'auth': req.cookies.session.auth}, {
    firstName  : req.body.first_name,
    lastName   : req.body.last_name,
    username    : req.body.username,
    email       : req.body.email,
    password    : req.body.password,
    confPassword    : req.body.confPassword,

  }, function(err, callback){
    res.redirect('/dashboard?msg=Profile Updated');
  });
}
   next();
});

//Delete Account
router.post('/delete_account', function(req, res){
  deleteAccount = (req, res) => {
  var session = req.cookies.session;
  User.remove({'auth': session.auth}, function(err, reply){
    (reply);
    res.sendStatus(200);
  })
}
})
module.exports = router;
