const express = require('express');
const router = express.Router();
const CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

router.use(express.json());



const User = require('../models/User')


router.post ('/register', async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
  }); 

    try{
      const savedUser = await newUser.save();
      res.status(201).json(savedUser)
       res.redirect('dashboard');
    } catch(err){
      res.status(500).json(err)
    }
});

router.post("/login", async (req,res )=>{
  try {
    const user = await User.findOne({username: req.body.username})
      !user && res.status(401).json("Wrong credential")

      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );

      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

       OriginalPassword !== req.body.password && res.status(401).json("Wrong credential")

       const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin,
       }, process.env.JWT_SEC_KEY, {expiresIn: "10d"})

       const {password, ...others} = user._doc;

       res.status(200).json({...others, accessToken});
      //  res.redirect('dashboard');
    } catch (err) {
      res.status(500).json(err)
    }
})

module.exports = router;
