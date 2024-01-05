import React, { useEffect, useState } from 'react'
import './DashboardTable.scss'
import Table from 'react-bootstrap/Table';
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip'
import Loader from '../../components/loader/Loader';


function DashboardTable({ productDetails, handleEdit, getProduct }) {
  const reverse = productDetails.reverse();
  console.log(reverse);
  const handleDelete = (id) => {
    console.log(id, 'ID')
    axios.delete(`https://6554c0c563cafc694fe6e489.mockapi.io/Ecom/${id}`
    ).then(() => toast('Deleted Successfully'))
      .finally(() => {
        getProduct()
      })
  }

  return (
    <div className='dashboard_table'>
      <Tooltip id="my-tooltip" place='bottom' />
      <ToastContainer autoClose={2000} theme="light" />
      <div className="table_title">Product Details</div>
     
      <Table striped bordered hover>
        <thead  >
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
        <Loader/>
{console.log(productDetails?.reverse(),".reverse()")}
          {
            productDetails.reverse().map((item,index) => {
              return (
                <tr>
                  <td>{index+1}</td>
                  <td><img style={{ height: '50px' }} src={item.image} alt="image" /></td>
                  <td>{item.name}</td>
                  <td>{item.description.slice(0, 70)}...</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.currentDates}</td>
                  <td style={{ display: 'flex', justifyContent: 'space-around', height: '70px' }} ><FaRegEdit data-tooltip-id="my-tooltip" data-tooltip-content="Edit" className='edit_icon' onClick={() => { handleEdit(item) }} /> <MdDeleteOutline data-tooltip-id="my-tooltip" data-tooltip-content="Delete" className='delete_icon' onClick={() => { handleDelete(item.id) }} /></td>
                </tr>
              )
            })
          }

        </tbody>
      </Table>
    </div>
  )
}

export default DashboardTable
