"use client";
import React, { useState } from "react";
import TopNavbar from "../components/topNavbarWelcome";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="bg-white rounded-3xl p-8 md:w-[40rem] mt-20 bg-opacity-80 w-full">
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-0.5 text-3xl ">
            LOGIN
          </h1>
          <hr style={{ borderWidth: "1.5px" }} />
          <p
            className="text-[#171832] font-serif text-center mt-1 mb-8"
            style={{ fontSize: "14px" }}
          >
            WELCOME BACK!
          </p>
          <form action="#" method="POST">
            <div className="flex justify-center mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] flex justify-between items-center"
              />
            </div>
            <div className="flex justify-center mt-5 items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] pr-12" // Tambahkan pr-12 untuk memberikan ruang di sebelah kanan input untuk ikon mata
              />
              <div className="absolute right-32 top-1/2 transform -translate-y-1/2">
                {showPassword ? (
                  <FaEyeSlash onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="bg-[#011145] hover:bg-[#01071b] text-[#AD773D] py-2 px-4 rounded-full w-96 h-14 ">
                Login
              </button>
            </div>
            <div className="flex justify-center mt-5">
              <p
                className="text-[#171832] font-serif text-center mt-1 mb-8"
                style={{ fontSize: "14px" }}
              >
                Not have an account ?{" "}
                <a
                  href="#"
                  class="text-[#AD773D] font-serif text-center mt-1 mb-8 hover:teks-[#AD773D]"
                  style={{ fontSize: "14px" }}
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}