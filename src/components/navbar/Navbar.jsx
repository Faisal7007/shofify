import React, { useContext, useEffect, useState } from 'react'
import './Navbar.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { RiAdminLine } from 'react-icons/ri'
import { MdClose } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import Login from '../../pages/login/Login'
import CartContext from '../../contextApi/CartContext'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { HiTrash } from "react-icons/hi2";
import Cart from '../cart/Cart'

function Navbar() {
  const navigate = useNavigate()
  const items = useSelector((state) => state.cart)
  console.log(items, 'Items')
  const [searchQuery, setSearchQuery] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  const [data, setData] = useState([])

  const [cartData, setCartData] = useState('')


  const [isCartOpen, setIsCartOpen] = useState(false)

  // const conditionalStyle={
  //    display: isCartOpen ? 'block' : 'none'
  // }

  const conditionalStyle = {
    display: isCartOpen ? 'block' : 'none'
  }

  const getData = () => {
    axios.get('https://6554c0c563cafc694fe6e489.mockapi.io/Ecom')
      .then((res) => { setData(res.data) })
  }

  useEffect(() => {
    getData()

  }, [])


  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
    if (e.target.value) {

      setIsOpen(!isOpen)
    }
    else {
      setIsOpen(!isOpen)
    }
    // if(searchQuery===''){
    //   setIsOpen(true)
    // }
    // else{
    //   setIsOpen(false)
    // }

  }



  return (

    <div style={{ overflow: "hidden" }}>
      <div className="cart" style={conditionalStyle}>
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

                        <div className="count">1</div>
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

      <div className='navbar'>
        <nav className='main_contents'>
          <motion.div whileHover={{ scale: 1.1 }} className="navLogo">Shopify</motion.div>


          {/* <div className="cart" style={conditionalStyle} >
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

                          <div className="count">1</div>
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





        </div> */}


          <div className="rightContents">
            <input type="text" value={searchQuery} onChange={handleInputChange} placeholder='Search Your Item' />
            <AiOutlineSearch className='search_icon' />
            <div className="bag_content" onClick={() => setIsCartOpen(true)} >
              <BiShoppingBag className='bag_icon' />
              <span >{items?.length}</span>
            </div>

            {
              isOpen ? <div onMouseLeave={() => {setIsOpen(false) }} className="search_list">
                {
                  filteredData.map((item) => {
                    return (
                      <div className="container" onClick={() => { navigate('/product_details', { state: { item } }) }} >
                        <div className="container_top">
                          <img src={item.image} alt="" />
                          <div className="title">{item.name}</div>
                        </div>
                        <div className="horizontal_line"></div>
                      </div>
                    )
                  })
                }

              </div> : null
            }



            <div onClick={() => { navigate('/login') }} className="admin">
              <RiAdminLine />
            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar
