"use client";
import React, { useState } from "react";
import TopNavbar from "../components/topNavbarWelcome";

export default function Page() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Email and password cannot be empty.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="bg-white rounded-3xl p-8 md:w-[40rem] mt-20 bg-opacity-80 w-full">
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-0.5 text-3xl ">
            RESET PASSWORD
          </h1>
          <hr style={{ borderWidth: "1.5px" }} />
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] flex justify-between items-center"
              />
            </div>
            {error && (
              <div className="flex justify-center mt-2 text-red-600">
                {error}
              </div>
            )}
            <div className="flex justify-center mt-5">
              <button className="bg-[#011145] hover:bg-[#01071b] text-[#AD773D] py-2 px-4 rounded-full w-96 h-14 ">
                Reset
              </button>
            </div>
            <div className="flex justify-center mt-5">
            <a
                href="/Login"
                class="text-[#AD773D] font-serif text-center mt-1 mb-8 hover:teks-[#AD773D]"
                style={{ fontSize: "14px" }}
            >
                Back To Login
            </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}