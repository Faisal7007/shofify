import "./index.scss"
import { Route, Routes, useNavigate } from 'react-router-dom'

import Inquiry from '../../pages/inquiry/Inquiry'
import PrivetRoute from '../../router/privateRoute'
import Dashboard from '../../pages/dashboard/Dashboard'
import AddProduct from '../../pages/addProduct/AddProduct'
import Sidebar from '../../components/sidebar/Sidebar'
import AdminSetting from "../../pages/adminSetting/AdminSetting"
import Discount from "../../pages/discount/Discount"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import CartContextProvider from "../../contextApi/CartContextProvider"
import CartContext from "../../contextApi/CartContext"


function index() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [isModalOpen, setisModalOpen] = useState(false)
  const { userNameInContext } = useContext(CartContext)

  const getData = () => {
    axios.get('https://6554c0c563cafc694fe6e489.mockapi.io/AdminLogin')
      .then((res) => setUserName(res?.data[0]?.username))
  }
  useEffect(() => {
    getData()

  }, [])

  const handleYesBtn = () => {

    navigate('/')

  }

  return (
  <>
        <div className="message">
            This Page will only open in desktop
        </div>

      <div className="admin_index">
        <div className="topbar">Admin Panel
          <button className="logout_btn" onClick={() => setisModalOpen(true)} >Logout</button>
          <div className="greting">Welcome <span style={{ color: 'aquamarine' }}>{userNameInContext}</span> </div>
          {
            isModalOpen ? <div className="confirm_div" onMouseLeave={() => setisModalOpen(false)} >
              <div className="title">Are You Sure</div>
              <button className="yes_button" onClick={handleYesBtn} >Yes</button>
              <button className="no_button" onClick={() => setisModalOpen(false)} >No</button>
            </div> : ''
          }

        </div>
        <div className='main-panel-box'>
          <Sidebar />
          <Routes>
            <Route path='dashboard' element={<PrivetRoute><Dashboard/></PrivetRoute>} />
            <Route path='add_product' element={<PrivetRoute><AddProduct/></PrivetRoute>} />
            <Route path='discount' element={<PrivetRoute><Discount/></PrivetRoute>} />
            <Route path='inquiry' element={<PrivetRoute><Inquiry/></PrivetRoute>} />
            <Route path='admin_setting' element={<PrivetRoute><AdminSetting/></PrivetRoute>} />
          </Routes>
        </div>
      </div>

  </>


  )
}

export default index
