"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import Product from "./Product.js";

const productCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //FETCH ALL PRODUCTS FROM DB
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/products");
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <Swiper
      className=""
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
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* RENDER FOR ALL PRODUCTS */}
      {data.map((item) => (
        <SwiperSlide className="gap-4 mb-[30px]">
          <Product
            name={item.name}
            price={item.price}
            rating={item.rating}
            id={item._id}
            image={item.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default productCard;
