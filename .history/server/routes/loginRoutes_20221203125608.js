var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const axios = require('axios');

const User = require('../models/User')


router.use(bodyParser.urlencoded({ extended: false }));

/* GET shop page. */

router.post('/', async (req, res, next) =>{
  const payload = req.body;

  if(req.body.username && req.body.password){
      const user = await User.findOne({
      $or: [
        {username: req.body.username},
        {email: req.body.email}
      ]
    })
      .catch((err) => {
        console.log(err)
        payload.errorMessage = 'Something went wrong',
        res.status(200).render('login', payload);
      })

      if(user != null ) {
       const result = bcrypt.compare(req.body.password, user.password)

       if(result === true) {
        req.session.user = user;
        return res.redirect('/dashboard')
       } 
      }

      // payload.errorMessage = 'Login credential incorrect';
     return res.status(200).render('login', );
  }

      payload.errorMessage = 'Please make sure each field has a valid value',
      res.status(200).render('login')

})


module.exports = router;
