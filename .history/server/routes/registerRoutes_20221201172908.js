const express = require('express');
const router = express.Router();
const axios = require('axios');
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }));

const User = require('../models/User')

app.use(express.json());

router.post('/', async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim(),
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confPassword: req.body.confPassword,
  })

  const payload = req.body;

  if(newUser) {
    const user = await User.findOne({
      $or: [
        {username: newUser.username},
        {email: newUser.email}
      ]
    })
      .catch((err) => {
        console.log(err)
        payload.errorMessage = 'Something went wrong',
        res.status(200).render('register', payload);
      })

      if(user == null){
        // No user found
        const data = req.body;

        // Hash password with bcrypt
        data.password = await bcrypt.hash(password, 10);

        User.create(data)
        .then((user) => {
          req.session.user = user;
          return res.redirect('/')
        })
      }
      else {
        // User Found
        if(email == user.email) {
         payload.errorMessage = 'Email already in user';
        }
        else {
          payload.errorMessage = 'Username already in user'; 
        }
        res.status(200).render('register', payload);
      }
    }
  });

module.exports = router;
