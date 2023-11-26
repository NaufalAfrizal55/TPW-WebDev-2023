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
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include", //HARUS ADA INI
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
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        console.log("berhasil login client");
      } else {
        console.log("gagal login client");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    console.log(username, email, password);
    window.location.href = "http://localhost:3000"
  };
  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        console.log("berhasil signup client");
      } else {
        console.log("gagal signup client");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
    window.location.href = "http://localhost:3000";
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
                <button
                  type="button"
                  onClick={handleRedirect}
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <div className="flex">
                    <FcGoogle className="text-2xl mr-2" />
                    <span className="">Google</span>
                  </div>
                </button>
              </div>
              <p className="text-gray-700 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-nav w-64 p-2 flex items-center gap-2 mb-3">
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
                <div className="bg-nav w-64 p-2 flex items-center gap-2 mb-3">
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
                <div className="bg-nav w-64 p-2 flex items-center gap-2">
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
                  className="border-2 border-blue-gray-300 text-black rounded-full px-8 py-2 inline-block font-semibold hover:bg-blue-gray-400 hover:text-nav"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="border-2 border-blue-gray-300 text-black rounded-full px-8 py-2 inline-block font-semibold hover:bg-blue-gray-400 hover:text-nav"
                >
                  Log Out
                </button>
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
            <button
              onClick={handleSignup}
              className="border-2 border-blue-gray-300 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-gray-400 hover:text-nav"
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
