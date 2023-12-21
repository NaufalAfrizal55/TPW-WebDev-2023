"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const admin = () => {
    const [data, setData] = useState([]);
    const [cookie, setCookie] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/order", {
                    withCredentials: true,
                });
                setData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        const checkCookie = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/auth/check-cookie", {
                    withCredentials: true,
                });
                if (response && response.data) {
                    setCookie(response.data);
                    fetchData(); // Move the data fetching here
                } else {
                    setCookie(null);
                }
            } catch (error) {
                // HANDLE ERROR
                if (error.response && error.response.status === 401) {
                    console.log('Unauthorized', error);
                } else {
                    console.log('Error checking cookie:', error);
                    setCookie(null);
                }
            }
        };
    
        checkCookie();
    }, []);
    
  return (
    <div>
        {data && data.map((order) => (
            <div className='rounded-lg my-3 text-center ' key={order._id}>
                <div className='flex justify-center border-blue-gray-800 rounded-lg bg-blue-gray-700 p-4 gap-3'>
                    <h1>{order.orderItems.product.name}</h1>
                    <h1>{order.user.username}</h1>
                    <div></div>
                </div>
            </div>
        )
        )}
    </div>
  )
}
export default admin
