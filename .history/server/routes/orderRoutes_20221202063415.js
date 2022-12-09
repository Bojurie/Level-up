const express = require('express');
const Product = require('../models/Product');
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken');

const router = express.Router();

// CREATE

router.post("/", verifyToken, async (req,res) => {
  const newCart = new Product(req, res)

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart)
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// UPDATE 
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id, 
      {
        $set: req.body,
      }, 
      {new: true}
    );
    res.status(200).json(updatedCart);
  } catch (err){
    res.status(500).json(err)
  }
  }
);




// // Delete User
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json("Cart has been deleted ...")
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// // GET USER Cart
router.get('/find/:userId',  verifyTokenAndAuthorization, async (req, res) => {
  try {
   const cart = await Cart.findone({userId: req.params.userId})
    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// // GET ALL Product
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart)
   } catch(err) {
    res.status(500).json(err) 
      }
})
  

module.exports = router;
