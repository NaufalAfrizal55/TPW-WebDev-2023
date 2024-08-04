"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo/logo.svg";
import cart from "../../../public/cart.svg";
import chat from "../../../public/chat.svg";
import axios from "axios";

const Nav = () => {
  const [cookie, setCookie] = useState()
  useEffect(() => {
    const checkCookie = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/check-cookie`, {
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
  
    checkCookie();
  }, []);
  

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`, {}, {
        withCredentials: true,                //solusi cookie pad logout: POST perlu string {}
      });
      if (response) {
        console.log("berhasil logout client");
        setCookie(null);
      } else {
        console.log("gagal logout client");
      }
    } catch (error) {
      console.log("Error during login:");
    }
    // window.location.reload();
  };

  return (
    <nav className=" bg-nav w-full z-20">
      <div className="flex items-center justify-normal lg:justify-between gap-0 lg:gap-[8px] lg:pr-[80px] lg:pl-[66px]">
        <a href="/" className="flex items-center rtl:space-x-reverse">
          <Image
            src={Logo}
            className="w-[160px] 2xl:w-[240px]"
            alt="BeanMasters Logo"
            priority={true}
          />
        </a>

        <div className="flex items-center lg:gap-3 md:order-2 mspace-x-1 lg:space-x-3 rtl:space-x-reverse">
          <Link href="https://wa.me/+6288232863355">
            <Image
              src={chat}
              width={36}
              alt="chat-icon"
              className="hover:bg-brown-50 rounded-full"
            ></Image>
          </Link>
          <Link href="/my-order">
            <Image 
              href="/my-order" 
              src={cart} 
              width={36} 
              alt="cart-icon"
              className="hover:bg-brown-50 rounded-full"
            ></Image>
          </Link>
          {cookie ? (
          <Link
            href="/"
            type="button"
            onClick={handleLogout}
            className="text-white  hover:bg-brown-300 font-semibold font-inter rounded-[53px] text-sm px-4 py-2 text-center bg-button-100 "
          >
            Log Out
          </Link>) : (
          <Link
            href="/login"
            type="button"
            className="text-white  hover:bg-brown-300 font-semibold font-inter rounded-[53px] text-sm px-4 py-2 text-center bg-button-100 "
          >
            Sign In
          </Link>) }

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center p-3 md:p-3 mt-4 font-PoetsenOne border rounded-lg  md:space-x-[88px] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-text-900 hover:text-white md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="./#market"
                className="block py-2 px-3 text-text-900 hover:text-white md:bg-transparent md:p-0  "
              >
                Market
              </Link>
            </li>
            <li>
              <Link
                href="./#process"
                className="block py-2 px-3 text-text-900 hover:text-white md:bg-transparent md:p-0"
              >
                Process
              </Link>
            </li>
            <li className="">
              <Link
                href="./#aboutus"
                className="block lg:py-2 lg:px-3 text-text-900 hover:text-white md:bg-transparent md:p-0"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

};

export default Nav;

