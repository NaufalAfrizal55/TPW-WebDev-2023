'use client'
import React, { useState, useEffect } from 'react'

const myOrder = () => {
  const [user, setUser] = useState(null)
  const [allOrder, setAllOrder] = useState([])
//FETCH USER FROM LOCALSTPRAGE & DATA ORDER
  useEffect(() => {
    const fetchData = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      
      if (storedUser) {
        setUser(storedUser);
        try {
          const response = await fetch(`http://localhost:5000/api/order/${storedUser._id}`);
          const result = await response.json();
          setAllOrder(result);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      }
    };
  
    fetchData();
  }, [setUser, setAllOrder]); 

  return (
    <div className='mt-[120px]'>
      {user ? ( 
      <div>
        {allOrder && allOrder.map((order) => (
          <h1>Tagihan : {order.itemsPrice}</h1>
        ))}

      </div>
        ) : (
          <h1>clear</h1>
      )}
      
    </div>
  )
}

export default myOrder