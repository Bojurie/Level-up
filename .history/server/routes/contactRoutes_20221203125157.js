const express = require('express');
const router = express.Router();

/* GET shop page. */
router.post('/contact', function(req, res, next) {
  const description = 'Thnk You For Your Message';
  const title = 'Contact'
   res.render('contact', {title, description});

   next();
});

module.exports = router;
