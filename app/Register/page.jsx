"use client";
import React, { useState } from "react";
import TopNavbar from "../components/topNavbarWelcome";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="bg-white rounded-3xl p-8 mt-20 md:w-[50rem] h-[24rem] bg-opacity-70">
          {/* <div className="bg-[#AD773D]"></div> */}
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-0.5 text-3xl">
            REGISTER
          </h1>
          <hr style={{ borderWidth: '1.5px' }} />
          <p
            className="text-[#171832] font-serif text-center mt-1"
            style={{ fontSize: '16px' }}
          >
            WELCOME
          </p>
          <p className="text-[#171832] font-serif text-center mb-6" style={{ fontSize: '12px' }}>Help us fill in your undefined</p>
          <form action="#" method="POST">
            <div className="mb-4 grid grid-cols-3 gap-4" >
              <input type="name" placeholder="Enter your full name" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} />
              <input type="email" placeholder="Enter your email" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} />
              <input type="num" placeholder="Enter your number" className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4 relative">
              <input 
                type={showPassword ?"text" : "password"}
                placeholder="Create your password"
                className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} 
              />
              <div className="absolute left-80 top-1/2 transform -translate-y-1/2">
                {showPassword ? (
                  <FaEyeSlash onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye onClick={togglePasswordVisibility} />
                )}
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="col-span-1 p-2 rounded-2xl bg-[#AD773D] backdrop-blur-md placeholder-slate-950 text-black" style={{ borderRadius: '20px' }} 
              />
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                {showPassword ? (
                  <FaEyeSlash onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="bg-[#011145] hover:bg-[#01071b] text-[#AD773D] py-2 px-4 rounded-full w-96 h-14 ">
                Register
              </button>
            </div>
            <div className="flex justify-center mt-5">
              <p
                className="text-[#171832] font-serif text-center mt-1 mb-8"
                style={{ fontSize: "14px" }}
              >
                Already have an account?{" "}
                <a
                  href="#"
                  class="text-[#AD773D] font-serif text-center mt-1 mb-8 hover:teks-[#AD773D]"
                  style={{ fontSize: "14px" }}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}