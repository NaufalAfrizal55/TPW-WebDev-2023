import React from 'react'
import Image from 'next/image'
import city1 from '../assets/city1.png'

//{name, description, price, countInStock, image, rating}

//CSS UTK TIAP KOTAK DI SINI
const Product = ({name, price, image, rating}) => {
  return (
    <div className='p-[10px] bg-lime-500'>
        <div className='flex w-[300px] h-[300px] flex-col shadow-lg shadow-[#ef4444] border-2 hover:scale-110 
        transition ease-in-out duration-100 rounded-xl'>
            <Image className='w-full rounded-xl'
            src={city1}
            alt="product"
            />
            <div className='flex flex-col items-center'>
              <h1 className=''>{name}</h1>
              {/* <p>{description}</p> */}
              <h1>{price}</h1>
              <h1>{rating}</h1>
            </div>
        </div>
    </div>
  )
}

export default Product
