const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: String,
        default: 1
      },
    }
  ],
}, 
{timestamps: true})

const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart;