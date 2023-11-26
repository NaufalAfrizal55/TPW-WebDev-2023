'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo/logo.svg'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const myOrder = () => {
  const [allOrder, setAllOrder] = useState([])

//FETCH USER FROM LOCALSTORAGE & DATA ORDER
  useEffect(() => {
    //GET COOKIE (NOT SECURE, TPI GPP)
    const getCookie = Cookies.get('jwt')
    const decodedCookie = jwtDecode(getCookie)
    const fetchData = async () => {
      if (decodedCookie) {
        try {
          const response = await fetch(`http://localhost:5000/api/order/${decodedCookie.userId}`);
          const result = await response.json();
          setAllOrder(result);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      }
    };
    fetchData();
  }, [setAllOrder]); 

  return (
    <div className='w-[70%] h-full mx-auto p-6'>
      {allOrder ? ( 
      <div className=''>
        <h1>Shopping Cart</h1>
        {allOrder && allOrder.map((order) => ( 
        <div className='rounded-lg bg-button-100 text-white my-3 text-center '>
          <h1>Tagihan : {order.itemsPrice}</h1>
          <hr className='text-black bg-black'/>
        </div>
        ))}
      <Link href='https://wa.me/+6288232863355' className='text-white hover:bg-brown-300 font-semibold font-inter rounded-[53px] text-sm px-4 py-2 text-center bg-button-100'>PAY</Link>
      </div>
        ) : (
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='font-bold text-lg'>You don't have an order</h1>
            <Link href='/'>
            <Image
            src={Logo}
            className="w-[190px] 2xl:w-[240px] -ml-4 content-start"
            alt="BeanMasters Logo"
          />
            </Link>
          </div>
      )}
      
    </div>
  )
}

export default myOrder