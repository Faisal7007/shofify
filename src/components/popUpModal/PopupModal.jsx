import React from 'react'
import './PopupModal.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function PopupModal({passValid,setPassValid}) {
    const [show, setShow] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
   

    const getData= async()=>{
      await  axios.get('https://6554c0c563cafc694fe6e489.mockapi.io/AdminLogin')
        .then((res)=>setCurrentPassword(res?.data[0]?.password))
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(currentPassword,"CurrentPass")


    const handleClose = ()=>{
        setShow(false)
    }

    const handleSubmit =  () => {
        
        console.log(enteredPassword,"EntPas")
        console.log(currentPassword,"CurrentPass")
        if(enteredPassword===currentPassword){
            setPassValid(true)
        }
        else{
            toast("Incorrect Password")
            setPassValid(false)
        }
        // setShow(false)
       
    };
    const handleShow = () => setShow(true);
  return (
    <div className='popup_modal'>
      <ToastContainer autoClose={2000} theme="light" />
         <button variant="primary" style={{padding:'0 10px',fontSize:'20px',borderRadius:'30px',width:'100px'}} onClick={handleShow}>
              ChangeM
         </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter password"
                autoFocus
                value={enteredPassword}
                onChange={(e)=>setEnteredPassword(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
             Submit
          </Button>
        </Modal.Footer>
      </Modal>

      
    </div>
  )
}

export default PopupModal
