import React from "react";
import Image from "next/image";
import city1 from "../assets/city1.png";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

//{name, description, price, countInStock, image, rating}

//CSS UTK TIAP KOTAK DI SINI
const Product = ({ name, price, image, rating, id }) => {
  return (
    <div className="flex items-center p-[5%]  w-full justify-center">
      <Link href={`/products/${id}`}>
        <div
          className="group flex w-[300px] h-[400px] flex-col  shadow-lg shadow-neutral-500 hover:scale-110 
        transition ease-in-out duration-100 rounded-xl bg-secondary-700  gap-10"
        >
          <div className="flex justify-center items-center">
            <Image
              className=" w-[200px] aspect-square border-[7px] border-[#B6B3AF] rounded-xl mt-9"
              src={image}
              width={200}
              height={300}
              alt="product"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-[20px] ">{name}</h1>
            {/* <p>{description}</p> */}
            <h1 className="font-semibold text-[18px]">{price} / kg</h1>
          </div>
          <h1 className=" flex items-center justify-center gap-1 absolute bottom-9 3xl:bottom-10 left-[75px] 2xl:left-[25%] 3xl:left-[30%] group-hover:bottom-5 group-hover:left-[28px]">
            Add to cart <RxArrowRight />
          </h1>
          <h1 className="absolute bottom-9 3xl:bottom-10 right-[75px] 2xl:right-[25%] 3xl:right-[30%] group-hover:bottom-5 group-hover:right-[28px]">
            Rating : {rating}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Product;
