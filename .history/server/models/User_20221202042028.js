const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
    
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  confPassword: {
    type: String,
  },
  profilePic: {
    type: String,
    default: '/images/profilePic.png'
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, 
{timestamps: true})

const User = mongoose.model('User', UserSchema)

module.exports = User