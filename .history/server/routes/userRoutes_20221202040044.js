var express = require('express');
const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
var router = express.Router();

/* GET users listing. */
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  if(req.body.password) {
    req.body.password = CryptoJS.AES.decrypt(req.body.password, process.env.PASS_SEC).toString()
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id)
  } catch (error) {
    
  }
});

module.exports = router;
