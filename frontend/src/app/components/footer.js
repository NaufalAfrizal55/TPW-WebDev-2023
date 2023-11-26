import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import Logo from "../../../public/logo/logoBlack.svg";
import LogoWorldCoffee from "../../../public/logo/worldCoffee.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary-700 h-1/2 w-full flex md:flex-row flex-col justify-around items-center p-8 ">
        <div className="">
          {/* <ul> */}
          {/* <p className="text-gray-800 font-bold text-3xl pb-6">
              Stream<span className="text-blue-600">line</span>
            </p> */}
          <Image
            src={Logo}
            className=" w-[280px] 2xl:w-[380px] 3xl:w-[402px] "
          />
          {/* <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div> */}
          {/* </ul> */}
        </div>
        <div className="p-5 text-neutral-900">
          <ul>
            {/* <p className="text-gray-800 font-bold text-2xl pb-4">Product</p> */}
            <li className=" text-md pb-2 font-semibold hover:text-brown-300 cursor-pointer">
              <Link href={"#home"}>Home</Link>
            </li>
            <li className=" text-md pb-2 font-semibold hover:text-brown-300 cursor-pointer">
              <Link href={"#market"}>Market</Link>
            </li>
            <li className=" text-md pb-2 font-semibold hover:text-brown-300 cursor-pointer">
              Process
            </li>
            <li className=" text-md pb-2 font-semibold hover:text-brown-300 cursor-pointer">
              About Us
            </li>
          </ul>
        </div>
        <div className="p-5 text-neutral-900">
          <ul className="">
            {/* <p className="text-gray-800 font-bold text-2xl pb-4">Company</p> */}
            <li className=" text-md pb-2 font-semibold cursor-pointer my-4 text-[18px] 3xl:text-[24px]">
              Get in touch
            </li>
            <li className="flex justify-start items-center gap-2 text-md pb-2 font-semibold hover:text-brown-300 cursor-pointer my-3 3xl:text-[20px]">
              <FaWhatsapp></FaWhatsapp> <Link href={"#"}>+628123456789</Link>
            </li>
            <li className="flex justify-start items-center gap-2 text-md pb-2 font-semibold hover:text-brown-300 cursor-pointer my-3 3xl:text-[20px]">
              <MdOutlineEmail></MdOutlineEmail>
              <span>contact@beanmasters.com</span>
            </li>
            {/* <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li> */}
          </ul>
        </div>
        <div className="text-neutral-900 flex flex-col p-5 gap-2 justify-center items-center ">
          <h3 className=" font-PoetsenOne">Support By:</h3>
          <Image
            src={LogoWorldCoffee}
            className="w-[280px] 2xl:w-[380px] 3xl:w-[402px] "
          />
          {/* <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul> */}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-2 bg-secondary-900">
        <h1 className=" text-neutral-900 font-semibold">
          Copyright 2023. All right Reserved. BeanMasters{" "}
          {/* <span className="hover:text-blue-600 font-semibold cursor-pointer">
            streamline{" "}
          </span> */}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
