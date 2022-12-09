const express = require('express');
const router = express.Router();
const axios = require('axios');
const CryptoJS = require("crypto-js");


const User = require('../models/User')


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
      !user && res.status(401).json("Wrong credential")

      const hashPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );

      const OriginalPassword = hashPassword.toString(CryptoJS.enc.Utf8);


       OriginalPassword !== req.body.password && res.status(401).json("Wrong credential")

       const { password, ...others} = user._doc;

       res.status(200).json(others)
    } catch (err) {
      res.status(500).json(err)
    }
})

module.exports = router;
