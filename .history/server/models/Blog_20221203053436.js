const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  userId: { type: String, required: true },
  products: [
    {
      blogId: {
        type: String,
      },
      title: {
        type: String,
      },
      desc: {
        type: String,
      },
      blogImage: {
        type: String,
        
      },
    }
  ],
}, 
{timestamps: true})

const Blog = mongoose.model('Blog', BlogSchema)

module.exports = Blog;