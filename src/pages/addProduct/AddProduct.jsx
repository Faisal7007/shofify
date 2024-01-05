import React, { useEffect, useState } from 'react'
import './AddProduct.scss'
import axios from 'axios'
import DashboardTable from '../dashboardTable/DashboardTable'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosArrowDown } from 'react-icons/io'
import Loader from '../../components/loader/Loader';

function AddProduct() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Select Category')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [itemState, setItemState] = useState('')
  const [isMenuHide, setIsMenuHide] = useState(true)
  // const [date, setDate] = useState('18/11/2023')
  const [productDetails, setProductDetails] = useState([])


  const [todayDate, setTodayDate] = useState('')
  const [currentDates, setCurrentDates] = useState(todayDate);



  const categories = ['Mens Collection', 'Womens Collection', 'Jewellery', 'Electronics']
  const reset = () => {
    setName(''), setDescription(''), setCategory('Select Category'), setCurrentDates(todayDate), setPrice(''), setImage('')
  }

  // const getProduct = () => {
  //   axios('https://6554c0c563cafc694fe6e489.mockapi.io/Ecom')
  //     .then((res) => setProductDetails(res.data))
  // }
  // useEffect(() => {
  //   getProduct();
  // }, [])

  useEffect(() => {

    // const getFormattedDate = () => {
    //   const date = new Date();
    //   // Format the date as desired (e.g., YYYY-MM-DD)
    //   const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)
    //     .toString()
    //     .padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
    //   setCurrentDate(formattedDate);
    //   setTodayDate(formattedDate)

    // };

    function formatDate(date) {
      const d = new Date(date);
      const day = d.getDate().toString().padStart(2, '0');
      const month = (d.getMonth() + 1).toString().padStart(2, '0');
      const year = d.getFullYear();
      return `${year}-${month}-${day}`; // Rearrange to yyyy-mm-dd
    }

    const currentDate = new Date(); // Current date
    const formattedDate = formatDate(currentDate);
    setCurrentDates(formattedDate);
    // console.log(formattedDate); // Output: formatted date in 'dd-mm-yyyy' format


    console.log(currentDates, 'Current')



    // Call the function to get the current date

    // getFormattedDate();
  }, []);


  // {console.log(currentDate,'Dtateee')}

  const handleAdd = (e) => {
    e.preventDefault();

    // const getProduct = () => {
    //   axios('https://6554c0c563cafc694fe6e489.mockapi.io/Ecom')
    //     .then((res) => setProductDetails(res.data))
    // }
    // useEffect(() => {
    //   getProduct();
    // }, [])

    if (isEdit === false) {
      
      axios.post(`https://6554c0c563cafc694fe6e489.mockapi.io/Ecom`,
        {
          name: name,
          description: description,
          category: category,
          currentDates: currentDates,
          price: price,
          image: image
        }
      )
        .then(() => {
          reset();
          toast("Product Added Successfully")
        })

        .finally(() => {
          getProduct();
        })

    }
    else {
      axios.put(`https://6554c0c563cafc694fe6e489.mockapi.io/Ecom/${itemState.id}`,
        {
          name: name,
          description: description,
          category: category,
          currentDates: currentDates,
          price: price,
          image: image
        }
      ).then(() => {
        setIsEdit(false)
        reset()

        toast("Product Updated Successfully")
      }).finally(() => { getProduct() })


    }
  }

  const getProduct = () => {

    axios('https://6554c0c563cafc694fe6e489.mockapi.io/Ecom')
      .then((res) => setProductDetails((res.data).reverse()))
  }
  console.log(productDetails,'Dataaaas');
  useEffect(() => {
    getProduct();
  }, [])

  const handleEdit = (item) => {
    setIsEdit(true)
    setItemState(item)
    setName(item.name)
    setDescription(item.description)
    setCategory(item.category)
    setCurrentDates(item.currentDates)
    setPrice(item.price)
    setImage(item.image)
    scrollToTop()

  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to top
    });
  };

  const handleCategoryClick = (eachCtegory) => {
    setCategory(eachCtegory)

  }

  return (
    <div className='add_product'>
      <div >
        <form onSubmit={handleAdd} className="form">
          <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Product Name' />
          <input type="text" required value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder='Enter Product Description' />
          {/* <input type="text" required value={category} onChange={(e) => { setCategory(e.target.value) }} placeholder='Enter Product Category' /> */}
          <div onClick={() => setIsMenuHide(!isMenuHide)} className="category">
            {category}
            <IoIosArrowDown className='down_arrow' />
            {
              !isMenuHide ? <div className="category_menu">
                {
                  categories.map((eachCtegory) => {
                    return (
                      <div onClick={() => handleCategoryClick(eachCtegory)} className="item">{eachCtegory}</div>
                    )
                  })
                }
              </div> : null
            }

          </div>
          {/* <div className="date">{currentDate}</div> */}
          {console.log("current-date", currentDates)}
          <input type="date" value={currentDates} onChange={(e) => { setCurrentDates(e.target.value) }} />
          <input type="text" required value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder='Enter Product Price' />
          <input type="text" required value={image} onChange={(e) => { setImage(e.target.value) }} placeholder='Enter Product Image Link' />
          <button className='add_btn'>{isEdit ? 'UPDATE' : 'ADD'}</button>
        </form>
      </div>
      <DashboardTable productDetails={productDetails} handleEdit={handleEdit} getProduct={getProduct} />

    </div>
  )
}

export default AddProduct
