var express = require('express');
var router = express.Router();

// app.set('views', 'views')
// app.set('view engine', 'ejs' );

/* GET shop page. */
router.get('/', function(req, res, next) {
  const description = 'Thnk You For Your Message';
  const title = 'Contact'
   res.render('contact', {title, description});

   next();
});

module.exports = router;
