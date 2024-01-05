import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Navbar  from '../../components/navbar/Navbar'
import HeroSection from '../../components/heroSection/HeroSection'
import Footer from '../../components/footer/Footer'
import Login from '../../pages/login/Login'
import CartContextProvider from '../../contextApi/CartContextProvider'
import Cart from '../../components/cart/Cart'
import ContactUs from '../../pages/contactUs/ContactUs'
import Slides from '../../components/slides/Slides'
import ProductDetails from '../../pages/productDetails/ProductDetails'


function index() {


  // const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      {/* <CartContextProvider>
       </CartContextProvider> */}

         <Navbar  />
         <HeroSection/>
         {/* <ProductDetails /> */}
        <Routes>
            <Route path='/' element={<Home  />}/>
            <Route path='/about' element={<About/>}/>
            {/* <Route path='/login' element={<Login/>}/> */}
            <Route path='cart' element={<Cart/>}/>
            {/* <Route path='contact_us' element={<ContactUs/>}/> */}
        </Routes>
        <Slides/>
        <Footer/>

    </div>
  )
}

export default index
