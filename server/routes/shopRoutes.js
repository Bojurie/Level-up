var express = require('express');
var router = express.Router();

/* GET shop page. */
router.get('/', function(req, res, next) {
   res.render('shop', {title: 'Shop', description: 'My Shop'});

   next();
});

module.exports = router;
