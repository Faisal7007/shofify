import React from 'react'
import AddProduct from '../../pages/addProduct/AddProduct'
import DashboardHome from '../../pages/dashboardHome/DashboardHome'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'

// Api=> https://6554c0c563cafc694fe6e489.mockapi.io/Ecom

function RightContent() {
  return (
    <div className='right_content' >
      <Routes>
        <Route path='/dashboard' element={<DashboardHome/>}/>
        <Route path='/add_product' element={<AddProduct/>}/>
      </Routes>
      
    </div>
  )
}

export default RightContent
