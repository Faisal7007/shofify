import React, { useEffect } from 'react'
import './Slides.scss'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import axios from 'axios';


function Slides() {
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


    return (
        <div className='slides'>
            <div className="title">Trending Products</div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[Autoplay,EffectCoverflow, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}

            >
                <SwiperSlide>
                    <img style={{height:'300px'}} src={mensCollection[mensRandomNum]?.image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{height:'300px'}}  src={mensCollection[mensRandomNum+1]?.image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{height:'300px'}}  src={womensCollection[womensRandomNum]?.image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{height:'300px'}}  src={womensCollection[womensRandomNum+1]?.image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{height:'300px'}}  src={jewelleryCollection[jewelleryRandomNum]?.image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{height:'300px'}}  src={jewelleryCollection[jewelleryRandomNum+1]?.image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{height:'300px'}}  src={electronicsCollection[electronicsRandomNum]?.image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{height:'300px'}}  src={electronicsCollection[electronicsRandomNum+1]?.image}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slides
