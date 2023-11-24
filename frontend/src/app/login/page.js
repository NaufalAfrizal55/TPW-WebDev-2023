"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";

// pages/login.js
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRedirect = () => {
    // Replace 'https://example.com' with your desired external URL
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        return res.redirect("http://localhost:3000");
        // Login successful, handle the response accordingly
      } else {
        return res.status(404).json({ message: "gagal ngab" });
        // Login failed, handle the error
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {/* Sign in section */}
          <div className="w-3/5 p-5">
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2">Sign in to account</h2>
              <div className="border-2 w-10 border-black inline-block mb-2"></div>
              {/* Social Login Section */}
              <div className="flex justify-center my-2">
                <Link
                  onClick={handleRedirect}
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <div className="flex">
                    <FcGoogle className="text-2xl mr-2" />
                    <span className="">Google</span>
                  </div>
                </Link>
              </div>
              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center gap-2 mb-3">
                  <IoIosMail className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center gap-2">
                  <MdLockOutline className="text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Passwords"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Sign up section */}
          <div className="w-2/5 bg-nav rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello Friends</h2>
            <div className="border-2 w-10 border-black inline-block mb-2"></div>
            <p className="text-gray-700 mb-6">
              Enter your personal details and start journey with us
            </p>
            <Link
              href="#"
              className="border-2 border-white text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-nav"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// pages/index.js or any other page file

{
  /* <div>
<h1>Login</h1>
<form>
  <label>
    Username:
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  </label>
  <br />
  <label>
    Email:
    <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </label>
  <br />
  <label>
    Password:
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </label>
  <br />
  <button
    type="button"
    onClick={handleLogin}
    className=" border-spacing-3 text-2xl font-semibold mb-4"
  >
    Login
  </button>
  <br />
  <button
    type="button"
    onClick={handleRedirect}
    className=" border-spacing-3"
  >
    Google
  </button>
  <br />
</form>
</div> */
}
