"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { ServiceData } from "../constants/page.js";
import Product from "./Product.js";

// export function productCard() {
//   return (
//     <div className="flex items-center justify-center flex-col py-[5%]">
//       <Swiper
//         breakpoints={{
//           340: {
//             slidesPerView: 2,
//             spaceBetween: 15,
//           },
//           700: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//           },
//         }}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
//         className="max-w-[90%] lg:max-w-[80%]"
//       >
//         {ServiceData.map((item) => (
//           <SwiperSlide key={item.title}>
//             <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
//               {/* <div
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: {item.backgroundImage} }}
//               /> */}
//               <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
//               <div className="relative flex flex-col gap-3">
//                 <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
//                 <h1 className="text-xl lg:text-2xl">{item.title} </h1>
//                 <p className="lg:text-[18px]">{item.content} </p>
//               </div>
//               <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

//CSS UTK SECTION PEMBUNGKUS KOTAK2 DI SINI
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
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* RENDER FOR ALL PRODUCTS */}
      {data.map((item) => (
        <SwiperSlide className="gap-4">
          <Product
            name={item.name}
            price={item.price}
            rating={item.rating}
            id={item._id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default productCard;
