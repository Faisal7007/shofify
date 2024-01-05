import React, { useState } from 'react'
import './ContactUs.scss'
import Form from 'react-bootstrap/Form';
import {motion} from 'framer-motion'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ContactUs() {
    // https://655a4acd6981238d054d596a.mockapi.io/ContactUs

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [message, setMessage] = useState('')
    const reset = ()=>{
        setName('')
        setEmail('')
        setMobile('')
        setMessage('')
}

    const handleSend = (e)=>{
        e.preventDefault()
       axios.post('https://655a4acd6981238d054d596a.mockapi.io/ContactUs',{
          name:name,
          email:email,
          mobile:mobile,
          message:message
       }).then(()=>toast('Send Successfully'))
       reset()
    }
  return (
    <div className='contactUs'>
        <form onSubmit={handleSend}  className="form_container">
      <ToastContainer autoClose={2000} theme="light" />

            <div className="title">Contact</div>
            <input required value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter Your Name' />
            <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter Your Email' />
            <input required value={mobile} onChange={(e)=>{setMobile(e.target.value)}} type="mobile" placeholder='Enter Your Number'/>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Enter Message' style={{maxHeight:'200px'}} rows={6} />
      </Form.Group>
    </Form>

    <motion.button whileTap={{scale:1.05}} className='send_btn'>Send</motion.button>
            
        </form>
    </div>
  )
}

export default ContactUs
