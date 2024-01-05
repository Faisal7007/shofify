import React, { useContext } from 'react'
import './Cart.scss'
// import CartContext from '../../contextApi/CartContext'
import { useSelector } from 'react-redux'

function Cart() {

  return (
    <div className='cart'>
  
        {/* <h1>Cart Page </h1> */}

        <div className="cart" style={conditionalStyle} >
          <div className="cart_topbar">
            <div className="title">Shopping Bag ({items.length})</div>
            <MdClose className='close_icon' onClick={() => setIsCartOpen(false)} />

          </div>

          <div className="cart_main_container">

            {
              items.map((item) => {
                
                return (
                  <div className="item_container">
                    <div className="item_container_inner">


                      <div className="left_content">

                        <img src={item.image} alt="image" />


                      </div>
                      <div className="middle_content">
                        <div className="product_name">
                          {item.name.slice(0, 30)}
                        </div>
                        <div className="buttons">
                          <div className="minus_btn">-</div>

                          <div className="count">{item.quantity}</div>
                          <div className="plus_btn">+</div>
                        </div>

                      </div>
                      <div className="right_content">
                        <div className="price">Rs {item.price}</div>
                        <HiTrash className='delete_icon' />

                      </div>

                    </div>

                  </div>

    

                )
              })
            }







          </div>





        </div>
      
      
    </div>
  )
}

export default Cart
