"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";

// pages/login.js
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRedirectGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`;
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`, {
        withCredentials: true,//HARUS ADA INI
      });
      if (response.ok) {
        console.log("berhasil logout client");
      } else {
        console.log("gagal logout client");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    window.location.href = "http://localhost:3000";
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
        username,
        password,
        email
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      if (response.status === 200) {
        console.log('berhasil login client');
      } else {
        console.log('gagal login client');
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    window.location.href = "http://localhost:3000";
  };
  const handleSignup = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`, {
        username,
        password,
        email,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
    
      if (response.status === 200) {
        console.log('berhasil signup client');
      } else {
        console.log('gagal signup client');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
    window.location.href = "http://localhost:3000";
  };

  return (
    <div className="flex flex-col items-center justify-center h-[110vh] py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 lg:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col-reverse md:flex-row w-2/3 max-w-4xl">
          {/* Sign in section */}
          <div className="md:w-3/5 mx-auto">
            <div className="py-10">
              <h2 className="text-xl md:text-3xl font-bold mb-2">
                Sign in to account
              </h2>
              <div className="border-2 w-10 border-black inline-block mb-2"></div>
              {/* Social Login Section */}
              <div className="flex justify-center my-2">
                <button
                  type="button"
                  onClick={handleRedirectGoogle}
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <div className="flex">
                    <FcGoogle className="text-2xl mr-2" />
                    <span className="">Google</span>
                  </div>
                </button>
              </div>
              <p className="text-gray-700 my-3 ">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-nav md:w-64 p-2 rounded-lg flex items-center gap-2 mb-3">
                  <IoIosMail className="text-gray-400" />
                  <input
                    type="username"
                    name="username"
                    placeholder="Username"
                    className="bg-nav outline-none text-sm  flex-1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="bg-nav rounded-lg md:w-64 p-2  flex items-center gap-2 mb-3">
                  <IoIosMail className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-nav outline-none text-sm flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="bg-nav md:w-64 rounded-lg p-2 flex items-center gap-2">
                  <MdLockOutline className="text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Passwords"
                    className="bg-nav outline-none text-sm flex-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-4 my-3">
                <button
                  onClick={handleLogin}
                  type="button"
                  className="border-2 border-blue-gray-300 text-black rounded-full px-5 md:px-8 py-2 inline-block font-semibold hover:bg-blue-gray-400 hover:text-nav"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="border-2 border-blue-gray-300 text-black rounded-full px-5 md:px-8 py-2 inline-block font-semibold hover:bg-blue-gray-400 hover:text-nav"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
          {/* Sign up section */}
          <div className="md:w-2/5 bg-nav md:rounded-tr-2xl rounded-br-2xl py-8 md:py-36 mx-auto md:px-12">
            <h2 className="text-3xl font-bold mb-2">Hello Friends</h2>
            <div className="border-2 w-10 border-black inline-block mb-2"></div>
            <p className="text-gray-700 mb-6">
              Enter your personal details and start journey with us
            </p>
            <button
              onClick={handleSignup}
              className="border-2 border-blue-gray-300 rounded-full px-6 lg:px-12 py-2 inline-block font-semibold hover:bg-blue-gray-400 hover:text-nav"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;