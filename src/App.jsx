import { useState } from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from './components/layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin, Public } from './modules';
import Login from './pages/login/Login';
import ContactUs from './pages/contactUs/ContactUs';
import ProductDetails from './pages/productDetails/ProductDetails';
import { Provider } from 'react-redux';
import store from './store/Store';
import Cart from './components/cart/Cart';
import CartContextProvider from './contextApi/CartContextProvider';

function App() {

  return (
    <div className='app'>
  <Provider store={store}>

      <BrowserRouter>
      <CartContextProvider>

        <Routes>
          <Route path='/*' element={<Public />} />
          <Route path='admin/*' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact_us' element={<ContactUs />}/>
          <Route path='/product_details' element={<ProductDetails/>}/>
          {/* <Route path='/cart' element={<Cart/>}/> */}

        </Routes>
      </CartContextProvider>
      </BrowserRouter>
   </Provider>

    </div>
  )
}

export default App
