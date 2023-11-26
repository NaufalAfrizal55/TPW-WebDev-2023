'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import city1 from '../../assets/city1.png'
import Image from 'next/image';
export default function productDetail({params}) {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      //FETCH ALL PRODUCTS FROM DB
      const fetchData = async () => {
        const res = await fetch(`http://localhost:5000/api/products/${params.productId}`);
        const result = await res.json();
        setProduct(result);
      };
  
      fetchData();
      console.log(product);
    }, []);

    const handleCart = () => {

    }

  return (
    <div className='mt-[60px] p-6 w-[90%] m-auto'>
      <div className='text-center lg:text-left px-5 flex gap-9'>
        <button>Home</button>
        <button>Market</button>
        <h1 className='font-inter font-bold'>{product.name}</h1>
      </div>
      <div className='flex justify-between flex-col lg:flex-row p-4 gap-4'>
        <Image 
          className='w-[483px] h-[607px] rounded-xl'
          src={product.image} 
          width={483}
          height={550}
        />
        <div className='p-3 flex flex-col gap-5'>
          <h1 className='font-inter font-bold text-4xl'>{product.name}</h1>
          <h1 className='font-inter font-bold text-4xl'>{product.price} / kg</h1>
          <h3>Stock (kg) : {product.countInStock}</h3>
          <h1>{product.description}</h1>
          <button onClick={handleCart} className='text-white hover:bg-orange-800 w-full mx-auto font-semibold font-inter rounded-md text-sm px-4 py-2 text-center bg-button-100 '>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
