import React from 'react'
import './ProductDetails.scss'
import { useLocation } from 'react-router-dom'
import  Navbar  from '../../components/navbar/Navbar'

function ProductDetails() {
   const location = useLocation()
   console.log(location.state.item,'Item')
   const product = location.state?.item
  return (
    <>
    <Navbar/>
    <div className='product_details'>
        <img src={product.image} alt="image" />
        <div className="description">
          {product.description}
        </div>
    </div>
    </>

  )
}

export default ProductDetails
