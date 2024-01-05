import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HeroSection.scss'
import electronic from '../../assets/electronic.webp'
import jewellery from '../../assets/jewellery.jpg'
import menscollection from '../../assets/menscollection.jpg'
import womencollection from '../../assets/womencollection.jpg'
import axios from 'axios';


function DarkVariantExample() {
  const [productDetails, setProductDetails] = useState([]);

  const getProduct = () => {
    axios('https://6554c0c563cafc694fe6e489.mockapi.io/Ecom')
      .then((res) => setProductDetails(res.data))
  }
  useEffect(() => {
    getProduct();
  }, [])


  
  const mensCollection = productDetails.filter((item) => {
    return item.category === 'Mens Collection';
  });

  const womensCollection = productDetails.filter((item) => {
    return item.category === 'Womens Collection';
  });

  const jewelleryCollection = productDetails.filter((item) => {
    return item.category === 'Jewellery';
  });

  const electronicsCollection = productDetails.filter((item) => {
    return item.category === 'Electronics';
  });
  const mensRandomNum = Math.floor(Math.random() * mensCollection?.length )
  const womensRandomNum = Math.floor(Math.random() * womensCollection?.length )
  const jewelleryRandomNum = Math.floor(Math.random() * jewelleryCollection?.length )
  const electronicsRandomNum = Math.floor(Math.random() * electronicsCollection?.length )

  {
    // console.log(jewelleryCollection,'jewelleryCollection');
  }
 

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item  >
        <img
          className=" crousel_img d-block w-100 "
          src={electronicsCollection[electronicsRandomNum]?.image}
          alt="First slide"
        />
        <Carousel.Caption style={{ height: 'fit-content', backgroundColor: '#00000033' }} >
          <h5 style={{ color: 'white' }}>{electronicsCollection[electronicsRandomNum]?.category}</h5>
          <p style={{ color: 'white' }}>{electronicsCollection[electronicsRandomNum]?.description.slice(0,50)}...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className=" crousel_img d-block w-100"
          src={mensCollection[mensRandomNum]?.image}
          alt="Second slide"
        />
        <Carousel.Caption style={{ height: 'fit-content', backgroundColor: '#00000033' }}>
          <h5 style={{ color: 'white' }}>{mensCollection[mensRandomNum]?.category}</h5>
          <p style={{ color: 'white' }}>{mensCollection[mensRandomNum]?.description.slice(0,50)}...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className=" crousel_img d-block w-100"
          src={jewelleryCollection[jewelleryRandomNum]?.image}
          alt="Third slide"
        />
        <Carousel.Caption style={{ height: 'fit-content', backgroundColor: '#00000033' }}>
          <h5 style={{ color: 'white' }}>{jewelleryCollection[jewelleryRandomNum]?.category}</h5>
          <p style={{ color: 'white' }}>
          {jewelleryCollection[jewelleryRandomNum]?.description.slice(0,50)}...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className=" crousel_img d-block w-100"
          src={womensCollection[womensRandomNum]?.image}
          alt="Third slide"
        />
        <Carousel.Caption style={{ height: 'fit-content', backgroundColor: '#00000033' }}>
          <h5 style={{ color: 'white' }}>{womensCollection[womensRandomNum]?.category}</h5>
          <p style={{ color: 'white' }}>
          {womensCollection[womensRandomNum]?.description.slice(0,50)}...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;