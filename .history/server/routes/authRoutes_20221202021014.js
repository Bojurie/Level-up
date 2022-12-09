const express = require('express');
const router = express.Router();
const axios = require('axios');
const CryptoJS = require("crypto-js");
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));

const User = require('../models/User')

router.use(express.json());

router.post('/register', async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confPassword: CryptoJS.AES.decrypt(req.body.password, process.env.PASS_SEC).toString(),
  });

    try{
      const savedUser = await newUser.save();
      res.status(201).json(savedUser)
    } catch(err){
      res.status(500).json(err)
    }
});

router.post("/login", async (req,res )=>{
  try {
    const user = await new User.find({username: req.body.password})

    const hashPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    )
  } catch (error) {
    
  }
})

module.exports = router;
