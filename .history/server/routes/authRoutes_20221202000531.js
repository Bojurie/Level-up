const express = require('express');
const router = express.Router();
const axios = require('axios');
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }));

const User = require('../models/User')

router.use(express.json());

router.post('/', async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confPassword: req.body.confPassword,
  });

    try{
      const savedUser = await newUser.save();
      res.status(201).json(err)
    } catch(err){
      res.status(500).json(e)
    }
});

module.exports = router;
