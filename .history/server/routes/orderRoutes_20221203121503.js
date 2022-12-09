const express = require('express');
const Product = require('../models/Product');
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken');

const router = express.Router();

// CREATE

router.post("/", verifyToken, async (req,res) => {
  const newOrder = new Product(req, res)

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder)
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// UPDATE 
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id, 
      {
        $set: req.body,
      }, 
      {new: true}
    );
    res.status(200).json(updatedOrder);
  } catch (err){
    res.status(500).json(err)
  }
  }
);




// // DELETE ORDER
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json("Cart has been deleted ...")
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// // GET USER ORDER
router.get('/find/:userId',  verifyTokenAndAuthorization, async (req, res) => {
  try {
   const orders = await Order.find({userId: req.params.userId})
    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// // GET ALL Product
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
  const orders = await Order.find();
  res.status(200).json(orders);
} catch (err){
  res.status(500).json(err)
  
}
})
  

module.exports = router;
