import React from 'react'
import './Sidebar.scss'
import SidebarItem from '../sidebarItem/SidebarItem'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import {LuLayoutDashboard} from 'react-icons/lu'
import {GoInfo} from 'react-icons/go'
import {IoSettingsOutline} from 'react-icons/io5'
import { CiDiscount1 } from "react-icons/ci";

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarItem icon={ <LuLayoutDashboard />} title='Dashboard' to='/admin/dashboard'/>
      <SidebarItem icon={ <AiOutlineAppstoreAdd />} title='Add Product' to='/admin/add_product'/>
      <SidebarItem icon={ <CiDiscount1/>} title='Discount ' to='/admin/discount'/>
      <SidebarItem icon={ <GoInfo />} title='Inquiry' to='/admin/inquiry'/> 
      <SidebarItem icon={ <IoSettingsOutline />} title='Setting' to='/admin/admin_setting'/> 
    </div>
  )
}

export default Sidebar
