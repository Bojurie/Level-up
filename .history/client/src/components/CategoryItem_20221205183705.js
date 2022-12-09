import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../../../server/models/Product'

const CategoryItem = () => {
  return (
    <div className='container'>
        <Link>
          <Image src={product.img}/>
          <div className='info'>
            <h2>{product.title}</h2>
            <Button>SHOP NOW</Button>
          </div>
        </Link>
    </div>
     
  )
}

export default CategoryItem