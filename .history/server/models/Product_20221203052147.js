const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  categories: {
    type: { type: Array}
  },
  color: {
    type: String,
  
  },
  size: {
    type: String,
  
  },
  price: {
    type: String,
    required: true,
   
  },

}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product