'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo/logo.svg'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

const myOrder = () => {
  const [allOrder, setAllOrder] = useState([])
  const [cookie, setCookie] = useState()
  const [userId, setUserId] = useState()
  const [user, setUser] = useState()

useEffect(() => {
  const fetchData = async () => {
    try {
      // 1. Cek cookie
      const cookieResponse = await axios.get("http://localhost:5000/api/auth/check-cookie", {
        withCredentials: true,
      });
      
      if (cookieResponse && cookieResponse.data) {
        setCookie(cookieResponse.data);

        // 2. Jika cookie ada, dekode dan set userId & user
        const decodedCookie = jwtDecode(cookieResponse.data)
        setUserId(decodedCookie.userId)
        setUser(decodedCookie.username)

        // 3. Ambil data order berdasarkan userId
        const orderResponse = await axios.get(`http://localhost:5000/api/order/${decodedCookie.userId}`);
        setAllOrder(orderResponse.data);
      } else {
        setCookie(null);
        setUserId(null);
        setAllOrder([]);
      }
    } catch (error) {
      // HANDLE ERROR
      if (error.response && error.response.status === 401) {
        console.log('Unauthorized ');
      } else {
        console.log('Error:', error.message);
        setCookie(null);
        setUserId(null);
        setAllOrder([]);
      }
    }
  };

  fetchData()
}, []); 

  // useEffect(() => {
  //   const checkCookie = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/auth/check-cookie", {
  //         withCredentials: true,
  //       });
  //       if (response && response.data) {
  //         setCookie(response.data);
  //       } else {
  //         setCookie(null);
  //       }
  //     } catch (error) {
  //       //HANDLE ERROR
  //       if (error.response && error.response.status === 401) {
  //         console.log('Unauthorized ');
  //       } else {
  //         console.log('Error checking cookie:');
  //         setCookie(null);
  //       }
  //     }
  //   }
  //   checkCookie();
  //   if(cookie){
  //     const decodedCookie = jwtDecode(cookie)
  //     setUserId(decodedCookie.userId)
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:5000/api/order/${decodedCookie.userId}`)
  //         setAllOrder(response.data)
  //       } catch(error){
  //         console.log("Error fetching orders", error);
  //       }
  //     }
  //     fetchData()
  //   }
  //   // if(cookie?.userId){
  //   //   const fetchData = async () => {
  //   //     try {
  //   //       const response = await axios.get(`http://localhost:5000/api/order/${cookie.userId}`)
  //   //       setAllOrder(response.data)
  //   //     } catch(error){
  //   //       console.log("Error fetching orders");
  //   //     }
  //   //   }
  //   // }
  //   //GET COOKIE (NOT SECURE, TPI GPP)
  //   // const checkCookie = document.cookie
  //   // if(!checkCookie) {
  //   //   alert("anda belum login")
  //   //   return window.location.href = "http://localhost:3000"
  //   // }
    
  //   // const getCookie = Cookies.get('jwt')
  //   // const decodedCookie = jwtDecode(getCookie)
  //   // const fetchData = async () => {
  //   //   if (decodedCookie) {
  //   //     try {
  //   //       const response = await fetch(`http://localhost:5000/api/order/${decodedCookie.userId}`);
  //   //       const result = await response.json();
  //   //       setAllOrder(result);
  //   //     } catch (error) {
  //   //       console.error('Error fetching orders:', error);
  //   //     }
  //   //   }
  //   // };
  //   // fetchData();
  // }, []); 

  return (
    <div className='w-[70%] h-full mx-auto p-6'>
      {allOrder ? ( 
      <div>
        <h1>Shopping Cart :  {user}</h1>
        {allOrder && allOrder.map((order) => ( 
        <div className='rounded-lg my-3 text-center ' key={order._id}>
          <div className='flex justify-center border-blue-gray-800 rounded-lg bg-blue-gray-700 p-4 gap-3'>
            <Image 
            src={order.orderItems.product.image}
            width={80}
            height={80}
            alt='product'
            className='rounded-lg'
            />
            <div className='h-full'>
              <h1>{order.orderItems.product.name}</h1>
              <h1 className='mb-full'>Tagihan : {order.itemsPrice}</h1>
              <hr className=''/>
            </div>
          </div>
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