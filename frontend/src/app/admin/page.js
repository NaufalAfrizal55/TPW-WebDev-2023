"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const admin = () => {
    const [data, setData] = useState([])
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
                    fetchData(); 
                }
            } catch (error) {
                // HANDLE ERROR
                if (error.response && error.response.status === 401) {
                    console.log('Unauthorized', error);
                } else {
                    console.log('Error checking cookie:', error);
                }
            }
        };
    
        checkCookie();
    }, []);
    
    const handleDelete = async(id) => {
        try {
            const deleteOrder = await axios.delete(`http://localhost:5000/api/order/${id}`, {
                withCredentials: true
            })
            window.location.reload()
        } catch (error){
            console.log(error);
        }     
    }

  return (
    <div>
        {data && data.map((order) => (
            <div className='rounded-lg my-3 text-center min-h-[70vh]' key={order._id}>
                <div className='flex justify-center border-blue-gray-800 rounded-lg bg-blue-gray-700 p-4 gap-3'>
                    <h1>{order.orderItems.product.name}</h1>
                    <h1>{order.user.username}</h1>
                    <h1>{order.itemsPrice}</h1>
                    <div onClick={() => handleDelete(order?._id)} className='bg-red-800 hover:cursor-pointer'>done</div>
                </div>
            </div>
        )
        )}
    </div>
  )
}
export default admin
