import React from 'react'

const BlogList = () => {
  return (
    <div className='BlogList'>
        {blogs.map((blog) =>(
          <div className='blog-preview' key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.user}</p>
          </div>
        ) )}
    </div>
  )
}
export default BlogList