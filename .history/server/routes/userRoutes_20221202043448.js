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
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      {
        $set: req.body,
      }, 
      {new: true}
    );
    res.status(200).json(updatedUser);
  } catch (err){
    res.status(500).json(err)
  }
  }
);

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted ...")
  } catch (err) {
    res.status(500).json(err)
    
  }
})
module.exports = router;
