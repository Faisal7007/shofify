import React, { useEffect, useState } from 'react'
import './Login.scss'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loginInfo, setLoginInfo] = useState([])
  const navigate = useNavigate()
 
  const getLoginData = ()=>{
    axios.get('https://6554c0c563cafc694fe6e489.mockapi.io/AdminLogin')
    .then((res)=>setLoginInfo(res.data))
  }

  useEffect(()=>{
    getLoginData()
    sessionStorage.clear()
  },[])

  const hadleLogin = ()=>{
    
    const saveUsername = loginInfo[0].username
    const savePassword = loginInfo[0].password

    
    if(username===saveUsername && password===savePassword){
      sessionStorage.setItem('key',1)
      navigate('/admin/dashboard')
    }
    else{
      setError(true)
      setTimeout(()=>{
        setError(false)
      },1500)
    }

    // if(sessionStorage.getItem('key')==1){
    //   navigate('/admin/add')
    //   sessionStorage.clear()
    // }
  }
  
  return (
    <div className="login_parent">
    <div className='login'>
      {
        error ?   <div className="error">Invalid Username or Password</div> :null
      }
       <span>Enter Username:</span>
      <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter User Name' />
      <span>Enter Password:</span>

      <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' />
      <motion.button  
      whileTap={{scale:1.05}} className='login_btn' onClick={hadleLogin}  >Login</motion.button>
    </div>
    </div>
  )
}

export default Login
