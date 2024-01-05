import React, { useEffect, useState } from 'react'
import './Inquiry.scss'
import Table from 'react-bootstrap/Table';
import { Tooltip } from 'react-tooltip'
import {MdDeleteOutline} from 'react-icons/md'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



function Inquiry() {

const [contactData, setContactData] = useState([])
const [selectedRows, setSelectedRows] = useState([])
const [isCheck, setisCheck] = useState(false)
  const getData = ()=>{
    axios.get('https://655a4acd6981238d054d596a.mockapi.io/ContactUs')
    .then((res)=>{setContactData(res.data)})

  }

  useEffect(()=>{
    getData()
  },[])

  const handleDelete = (id)=>{
    axios.delete(`https://655a4acd6981238d054d596a.mockapi.io/ContactUs/${id}`)
  
    .then(()=>  toast('Deleted Successfully')  )
  
    .finally(()=>getData())
    

  }

  const handleCheckbox = (event,rowId)=>{
    const isChecked = event.target.checked;
    console.log("check", isChecked);
    if (isChecked) {
      setSelectedRows([...selectedRows, rowId]);
      setisCheck(true)
    } else {
      setSelectedRows(selectedRows.filter(id => id !== rowId));
      setisCheck(false)

    }

  }


  const handleDeleteClick = async () => {
    // alert()
    
    try {
      // Perform delete request to API for selected rows
      const deletedRows = await Promise.all(selectedRows.map(async (rowId) => {
        await axios.delete(`https://655a4acd6981238d054d596a.mockapi.io/ContactUs/${rowId}`, {
        });
        return rowId;
      }));
     

      // Remove deleted rows from the displayed data
      setContactData(contactData.filter(row => !deletedRows.includes(row.id)));
        
      // Clear selected rows after deletion
      setSelectedRows([]);
    } catch (error) {
      console.error('Error deleting rows: ', error);
    }
  };

  return (
    <div className='inquiry'>
          <h1>Inquiry</h1>
          <button disabled={!isCheck} onClick={handleDeleteClick}  className='deleteSelectedBtn' >Delete Selected</button>

      <ToastContainer autoClose={2000} theme="light" />
      <Tooltip id="my-tooltip" place='bottom' />
         
          <Table striped bordered hover>
      <thead>
        <tr>
        <th>Select</th>
          <th>Sr.No.</th>
          <th> Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          contactData.map((item,index)=>{
            return(
              <>
              <tr>
              <td><input type="checkbox"  onChange={(event)=>handleCheckbox(event,item.id)} /></td>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td className='message_row'><textarea className='textarea' name="" id="" cols="30" rows="4" style={{border:'none',outline:'none',backgroundColor:'#e0e0e0'}} readOnly>{item.message}</textarea></td>
              <td><MdDeleteOutline data-tooltip-id="my-tooltip" data-tooltip-content="Delete" className='delete_icon' onClick={()=>{handleDelete(item.id)}}/></td>
            </tr>
            </>
            )
          })
        }
       
      </tbody>
    </Table>

    </div>
  )
}

export default Inquiry
