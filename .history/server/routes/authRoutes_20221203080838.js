const express = require('express');
const router = express.Router();
const axios = require('axios');
const CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

router.use(express.json());



const User = require('../models/User')


router.post ('/register', async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }); 

    try{
      const savedUser = await newUser.save();
      res.status(201).json(savedUser)
    } catch(err){
      res.status(500).json(err)
    }
});

router.post('/', async (req, res, next) =>{
  const payload = req.body;

  if(req.body.username && req.body.password){
      const user = await User.findOne({
      $or: [
        {username: req.body.username},
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
        return res.render('/dashboard')
       } 
      }

      // payload.errorMessage = 'Login credential incorrect';
     return res.status(200).render('login', );
  }

      payload.errorMessage = 'Please make sure each field has a valid value',
      res.status(200).render('login')

})

module.exports = router;
