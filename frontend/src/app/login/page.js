"use client";
import React, { useState } from "react";

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
        res.redirect("http://localhost:3000");
        // Login successful, handle the response accordingly
      } else {
        res.status(404).json({ message: "gagal ngab" });
        // Login failed, handle the error
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div>
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
          className=" border-spacing-3"
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
      </form>
    </div>
  );
};

export default Login;

// pages/index.js or any other page file
