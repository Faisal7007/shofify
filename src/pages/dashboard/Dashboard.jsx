import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Main from '../../components/main/Main'
import  Navbar  from '../../components/navbar/Navbar'
import './Dashboard.scss'
   

// useEffect(()=>{
//   sessionStorage.clear()

// },[])
function Dashboard() {
    const navigate = useNavigate()

    const handleLogout = ()=>{
        sessionStorage.clear()
        navigate('/login')
    }

    const handlePublic = ()=>{
      navigate('/*')
      
    }
  return (
    <div className='dashboard'>

        <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
