"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import Product from "./Product.js";
import axios from "axios";

const productCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //FETCH ALL PRODUCTS FROM DB
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/products");
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <Swiper
      modules={[FreeMode, Pagination]}
      pagination={true}
      breakpoints={
        {
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }
        // slidesPerView={3}
        // spaceBetween={15}
      }
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {/* RENDER FOR ALL PRODUCTS */}
      {data.map((item) => (
        <SwiperSlide className="gap-4 mb-[30px]" key={item._id}>
          <Product
            name={item.name}
            price={item.price}
            rating={item.rating}
            id={item._id}
            image={item.image}
            alt={`Product: ${item.name}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default productCard;
