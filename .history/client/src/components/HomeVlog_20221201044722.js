import React, {useState, useState} from 'react';
import BlogList from './BlogIist';
import './HomeVlog.css'

const HomeVlog = () => {
 const [blog, setBlog] = useState('')
  return (
    <div className='vlog'>
      
      <div className='vlog-wrapper'>
        <div className='vlog-heading'>
           <h1>Recent V-Logs</h1>
           <p>One day at a time</p>
        </div>
        
         <BlogList />
        
      </div>
      
    </div>
  );
}

export default HomeVlog;
