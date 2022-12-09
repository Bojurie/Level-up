const express = require('express');
const Blog = require('../models/Blog');
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken');

const router = express.Router();

// CREATE

router.post("/", verifyTokenAndAuthorization, async (req,res) => {
  const newBlog = new Blog(req, res)

  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog)
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// UPDATE Blog
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id, 
      {
        $set: req.body,
      }, 
      {new: true}
    );
    res.status(200).json(updatedBlog);
  } catch (err){
    res.status(500).json(err)
  }
  }
);




// // Delete Blog
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id)
    res.status(200).json("Blog has been deleted ...")
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// // GET USER Blog
router.get('/find/:userId',  verifyTokenAndAuthorization, async (req, res) => {
  try {
   const blog = await Blog.findone({userId: req.params.userId})
    res.status(200).json(blog)
  } catch (err) {
    res.status(500).json(err)
    
  }
})

// // GET ALL Product
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json(blog)
   } catch(err) {
    res.status(500).json(err) 
      }
})
  

module.exports = router;
