"use client";
import React, { useState, useEffect } from "react";
import { Order } from "../products/[productId]/dummy";
import Link from "next/link";

const myOrder = () => {
  const [user, setUser] = useState(null);
  const [allOrder, setAllOrder] = useState([]);
  //FETCH USER FROM LOCALSTPRAGE & DATA ORDER
  useEffect(() => {
    const fetchData = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser) {
        setUser(storedUser);
        try {
          const response = await fetch(
            `http://localhost:5000/api/order/${storedUser._id}`
          );
          const result = await response.json();
          setAllOrder(result);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };

    fetchData();
  }, [setUser, setAllOrder]);

  return (
    <div className="h-[110vh]">
      <div className=" flex h-screen absolute items-center overflow-y-auto bg-red-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {user ? (
            <div className=" ">
              <div className="">
                {/* <div className=" grid grid-flow-col	 mx-auto"> */}
                {allOrder &&
                  allOrder.map((order) => (
                    <div className=" bg-cream-500 w-[270px] h-auto p-4 rounded-md shadow-md">
                      <h1 class="text-lg font-semibold mb-2">
                        Nama Pengguna 1 : {order.user}
                      </h1>
                      {/* <div className="bg-cream-500 w-270 h-auto"> */}
                      {/* <h1>Tagihan : {order.itemsPrice}</h1> */}
                      <ul>
                        {order.orderItems.map((item) => (
                          <li className="flex flex-row items-center justify-between">
                            <h1>Produk : {item.name}</h1>
                            <h1>Jumlah : {item.qty}</h1>
                            {/* <h1>Harga : {item.price}</h1> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <h1>clear</h1>
          )}
        </div>
      </div>
      <div className="fixed flex justify-end bottom-0 right-0 left-0 p-4">
        <Link href={"#"}>
          <button className=" border-[3px] border-white text-white py-1 px-2 font-inter bg-brown-500">
            Exit Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default myOrder;
