import React, {useEffect, useState} from 'react'
import BlogList from '../components/BlogIist'
import { FormTitle } from '../components/FormTitle'

import './Vlog.css'

const Vlog = () =>{
   const [blog, setBlog] = useState('')

  useEffect(() => {
    
  })

  return (
    <>
    <div className='vlog'>
      <FormTitle className="VlogForm_title"/>
      <div className='vlog-wrapper'>
          <div className='vlog-content'>
            <h1>V-Log</h1>
            <div className=''>
              {/* <BlogList blogs={blogs} /> */}
            </div>
          </div>
      </div>
      
    </div>
    
    </>
  )
}

export default Vlog