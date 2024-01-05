import React, { useContext, useEffect, useState } from 'react'
import './AdminSetting.scss'
import {motion} from 'framer-motion'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import CartContext from '../../contextApi/CartContext'; 


function AdminSetting() {
    const [details, setDetails] = useState([])
    const [updateItem, setUpdateItem] = useState([])
    const [isUpdateClick, setIsUpdateClick] = useState(false)
    const [passValid, setPassValid] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isBlur, setIsBlur] = useState(false)
// for input fields
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [newPassword, setnewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [varifyPassword, setVarifyPassword] = useState('')

    const navigate = useNavigate()
    const { userNameInContext, setUserNameInContext } = useContext(CartContext)


const getData =  ()=>{
   axios('https://6554c0c563cafc694fe6e489.mockapi.io/AdminLogin')
    .then((res)=>setDetails(res.data))
 
  }

 useEffect(()=>{
  getData()
  localStorage.setItem('user',JSON.stringify(username))
  console.log(username,'Details')
 
},[])


const handleUpdateClick = (item)=>{
// setUpdateItem(item)
setUsername(item.username)
setEmail(item.email)
setMobile(item.mobile)
setProfilePic(item.profile_pic)
setIsUpdateClick(true)
setIsBlur(true)

}
const existUsername = details[0]?.username


const handleChange = (e)=>{
  e.preventDefault()
  handleScroll()

console.log('Yes')


// const existUsername = details[0]?.username

if(username===existUsername){

 axios.put(`https://6554c0c563cafc694fe6e489.mockapi.io/AdminLogin/${1}`,{
  username:username,
  email:email,
  mobile:mobile,
  profile_pic:profilePic
})
.then(()=> toast("Details Updated Successfully"))
// .then(()=>{setUsername(''),setEmail(''),setMobile(''),setProfilePic('')})
.then(()=>{setIsUpdateClick(false)})
.then(()=>{setUserNameInContext(username)})
.then(()=>{setIsBlur(false)})

.finally(()=>getData())
// console.log(username,'Username Hai')
}
else{

 setIsBlur(true)
 setIsModalOpen(true)
}
}


const handleChangePassword = (e)=>{
  e.preventDefault()
  const savePassword = details[0].password

  // console.log(savePassword,'Savee Pass')
  // console.log(password,' Pass')

  if(savePassword===password){

    if(newPassword===confirmPassword){
      axios.put(`https://6554c0c563cafc694fe6e489.mockapi.io/AdminLogin/${1}`,{
      password:newPassword
    })
    .then(()=> toast("Passworddd Updated Successfully"))
    // .then(()=>reset())
    .then(()=>setConfirmPassword(''))
    .finally(()=>getData())
    }
    else{
      toast("Password Not Matching")
    }
  }
  else{
    toast("Incorrect Password")

  }

}


const handleClose = ()=>{
  setIsBlur(false)
  setIsModalOpen(false)
  setIsUpdateClick(false)

}

const resetUpdateForm = ()=>{
  setUsername('')
  setEmail('')
  setMobile('')
  setProfilePic('')
}

const handleSubmit = ()=>{

  const existPassword = details[0].password
// alert('Another Function Called')
  if(existPassword===varifyPassword){
    axios.put(`https://6554c0c563cafc694fe6e489.mockapi.io/AdminLogin/${1}`,{
      // password:newPassword
      username:username

    })
    .then(()=> toast("Username Updated Successfully"))
    // .then(()=>reset())
    .then(()=>{setUserNameInContext(username)})
    .finally(()=>getData())
    setIsBlur(false)
    setIsModalOpen(false)
  }
  else{
    toast(" Incorrect Password  ")
  }

}


// Function to handle scroll events
function handleScroll(event) {
  // Check your specific condition here
  if (isModalOpen===true) {
    // Prevent default scrolling behavior
    event.preventDefault();
    event.stopPropagation();
  }
}

// Add an event listener for the 'scroll' event
window.addEventListener('scroll', handleScroll);



const handleBlurClick = ()=>{
  setIsBlur(false)
  setIsModalOpen(false)
  setIsUpdateClick(false)
}


const handleFormClose = ()=>{
  setIsUpdateClick(false)
  setIsBlur(false)
}


  return (
    <div className='admin_setting'>

    <ToastContainer autoClose={2000} theme="light" />

    <div className="top">

      {
        isModalOpen ?   <div className="customModal">
        <MdClose className='close_icon' onClick={handleClose} />
    
                 <input type="text" value={varifyPassword} onChange={(e)=>setVarifyPassword(e.target.value)} placeholder='Enter Password' />
                 <button onClick={handleSubmit}>Submit</button>
          </div> : ''
      }
    
      {
        isBlur ?  <div onClick={handleBlurClick} className="blur">
        </div> :''
      }

      <div className="top_left">
         
        {
          details.map((item)=>{
            return(
              <div className="left_container">

              <img src={item.profile_pic} alt="profile_pic" />
              <div className="userName">
                {item.username}
              </div>
              <div className="userEmail">
              {item.email}
              </div>
              <div className="userMobile">{item.mobile}</div>
              <button className="update_btn" onClick={()=>handleUpdateClick(item)} >UPDATE</button>
              </div>
            )
          })
        }
       
      </div>
      {
        isUpdateClick ? <div  className="top_right">
        <form onSubmit={handleChange} className='form'>
          <label>User Name:</label>
          <MdClose className='close_icon' onClick={handleFormClose} />
        <input type="text" required  value={username} onChange={(e)=>setUsername(e.target.value)} />
        <label>User Email:</label>

        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}  />

        <label>User Mobile:</label>
        <input type="mobile" required value={mobile} onChange={(e)=>setMobile(e.target.value)} />

        <label>Profile Pic :</label>
        <input type="text" required value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} />
 
        {
              <button className='change_btn' >Change</button>
        }
        
        </form>

      </div> :''
      }
     
    </div>

    <div className="bottom">

      <form className='form' onSubmit={handleChangePassword}>
        <div className="title">Change Password</div>
        <input type="text" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Current Password' />
        <input type="text" required value={newPassword} onChange={(e)=>setnewPassword(e.target.value)} placeholder='Set New Password' />
        <input type="text" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm New Password' />
        <button className='submit_btn' >Submit</button>

      </form>
      
    </div>
    
    </div>
  )
}

export default AdminSetting
