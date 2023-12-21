"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { NumberFormatBase } from "react-number-format";
import axios from "axios";

export default function productDetail({ params }) {
  const [theProduct, setTheProduct] = useState([]);
  const [qty, setQty] = useState()
  useEffect(() => {
    //FETCH PRODUCT FROM DB
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/api/products/${params.productId}`);
      setTheProduct(response.data);
    };

    fetchData();
  }, []);

  //LOGIC ORDERING
  const [userId, setUserId] = useState();
  const [cookie, setCookie] = useState();
  useEffect(() => {
    const checkCookie = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/check-cookie", {
          withCredentials: true,
        });
        if (response && response.data) {
          setCookie(response.data);
        } else {
          setCookie(null);
        }
      } catch (error) {
        //HANDLE ERROR
        if (error.response && error.response.status === 401) {
          console.log('Unauthorized ');
        } else {
          console.log('Error checking cookie:');
          setCookie(null);
        }
      }
    };
    checkCookie()
    if(cookie){
      const decodedCookie = jwtDecode(cookie)
      return setUserId(decodedCookie.userId)
    }

  }, [userId, cookie]);

  const handleCart = async () => {
    if(userId){
      try {
        const response = await axios.post("http://localhost:5000/api/order", 
        {
          user: userId,
          orderItems: {
            qty: qty,
            price: theProduct.price,
            product: theProduct._id,
          }
        },  {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        })
        if (response.status === 201) {
          alert("berhasil order");
          // window.location.href = `http://localhost:3000/products/${params.productId}`
          window.location.reload()
        } else {
          console.log("gagal order");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <div className="mt-[60px] p-6 w-[90%] m-auto">
      <div className="text-center lg:text-left px-5 flex gap-9">
        <button>Home</button>
        <button>Market</button>
        <h1 className="font-inter font-bold">{theProduct.name}</h1>
      </div>
      <div className="flex justify-between flex-col lg:flex-row p-4 gap-4">
        <Image
          className="w-[483px] h-[607px] rounded-xl"
          src={theProduct.image}
          width={483}
          height={550}
          alt="product pict"
        />
        <div className="p-3 flex flex-col gap-5">
          <h1 className="font-inter font-bold text-4xl">{theProduct.name}</h1>
          <h1 className="font-inter font-bold text-4xl">
            {theProduct.price} / kg
          </h1>
          <h3>Stock (kg) : {theProduct.countInStock}</h3>
          <h1>{theProduct.description}</h1>
          <h3 className="mt-6">Add Quantity :</h3>
          <NumberFormatBase
              className="bg-gradient-to-br from-[#E9DFDB]  via-[#E5C4B9] to-[#E8D8D3] rounded-xl"
              id="positiveNumber"
              allownegative="false"
              allowleadingzeros="false"
              thousandseparator="false"
              onChange={(e) => setQty(e.target.value)}
              isnumericstring="true"
          />
          {userId ? 
          (<button 
            onClick={handleCart}
            className="text-white hover:bg-orange-800 w-full mx-auto font-semibold font-inter rounded-md text-sm px-4 py-2 text-center bg-button-100 "
          >
            Add to Cart
          </button>) : 
          (<button 
            onClick={(e)=> alert("anda belum login")}
            className="text-white hover:bg-orange-800 w-full mx-auto font-semibold font-inter rounded-md text-sm px-4 py-2 text-center bg-button-100 "
          >
            Add to Cart
          </button>)
          }
        </div>
      </div>
    </div>
  );
}
