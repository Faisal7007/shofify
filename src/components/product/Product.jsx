import React, { useContext } from 'react'
import './Product.scss'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import CartContext from '../../contextApi/CartContext'
import { useDispatch } from 'react-redux'
import { add } from '../../store/CartSlice'



function Product({product,data}) {
  const dispatch = useDispatch()


  const handleAddToCart = (product)=>{
    dispatch(add(product))
  }


  return (
    <div className='product'>
      <img className='product_image' src={product.image} alt="image" />
      <div className="product_title">{product.name.slice(0,35)}</div>
      <div className="horizontal_line"></div>
      <div className="price_and_cart">
        <div className="price"> &#8377; {product.price}</div>
        <BsFillPlusCircleFill className='plus_icon' onClick={()=>handleAddToCart(product)}  />
      </div>
    </div>
  )
}

export default Product
