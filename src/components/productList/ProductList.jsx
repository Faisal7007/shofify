import React, { useEffect, useState } from 'react'
import './ProductList.scss'
import Product from '../product/Product'
import axios from 'axios'

function ProductList({selectedCategory,searchQuery}) {
  const [data, setData] = useState([])
  const [test, setTest] = useState('')
  // console.log(selectedCategory)

     const  fetchApi = ()=>{
      axios.get('https://6554c0c563cafc694fe6e489.mockapi.io/Ecom')
      .then((res)=>setData(res.data))
      
     }
  
  useEffect(()=>{
    fetchApi()
  },[])



  // const filteredData = data.filter(item =>
  //   item.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );


  // const mens_collection =  data.filter((item)=>{
  //   return item.category == 'Mens Collection'

  // })

  // const womens_collection =  data.filter((item)=>{
  //   return item.category == 'Women Collection'

  // })
    
  // console.log(mens_collection ,"mens collection")
  // console.log(womens_collection ,"women")
 

  // console.log(test,'Test');

  
  if(selectedCategory!=='All'){


  return (
    
    <div className='product_list'>
      { 
        data.filter((item)=>{
          return  item.category === `${selectedCategory}` 
        }).map((product)=>{
        return (<Product product={product} data={data}/>)
        })
      }
        
    </div>
  )
}

else{

  return(

  <div className='product_list'>
      { 
        data.map((product)=>{
        return (<Product product={product} data={data}/>)
        })
      }
    </div>
  )

}

}

export default ProductList
