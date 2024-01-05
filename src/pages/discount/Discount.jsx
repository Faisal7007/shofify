import React, { useContext } from 'react'
import './Discount.scss'
import CartContext from '../../contextApi/CartContext'

function Discount() {
  const { userNameInContext } = useContext(CartContext)

  return (
    <div className='discount'>
        <h1>Discount {userNameInContext}</h1>
    </div>
  )
}

export default Discount
