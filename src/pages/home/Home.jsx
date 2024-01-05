import React, { useEffect, useState } from 'react'
import './Home.scss'
import ProductList from '../../components/productList/ProductList'
import Product from '../../components/product/Product'

function Home({searchQuery}) {
  const categories = ["All","Mens Collection", "Womens Collection", "Jewellery", "Electronics"]
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(()=>{
       sessionStorage.clear()
  },[])


  const handleCategory = (category) => {
    setSelectedCategory(category)
  }
  return (
    <div className='home'>
      <marquee behavior="" className='marqueTag' direction="toLeft">Get Upto 50% Off <img src="https://png.pngtree.com/png-vector/20220521/ourmid/pngtree-50-discount-speed-style-shape-png-image-png-image_4644331.png" alt="image" /> </marquee>
      <div className="main_title">Welcome To The Store</div>
      <div className="title">Products</div>


<div className="category_parent">

      <div className="category">
        {
          categories.map((category) => {

            return (
              <div onClick={() => {handleCategory(category)}} className={`${selectedCategory == category ? 'category_border' : 'category_name'} `}>{category}</div>
            )
          }
          )
        }
        {/* <h2>{selectedCategory}</h2> */}
      </div>

</div>

      {/* <Product /> */}
      <ProductList searchQuery={searchQuery}  selectedCategory={selectedCategory}  />
    </div>
  )
}

export default Home
