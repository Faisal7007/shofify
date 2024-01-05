import React from 'react'
import './SidebarItem.scss'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

function SidebarItem({title,icon,to}) {
  return (
    <NavLink to={to} style={{textDecoration:'none', color:'black'}}>

    <div className='sidebar_item'>
        <div className="icon">
     {icon}
        </div>
        <div className="title">
            {title}
        </div>
      
    </div>
    </NavLink>
  )
}

export default SidebarItem
