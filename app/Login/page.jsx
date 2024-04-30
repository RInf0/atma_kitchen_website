import React from 'react';
import TopNavbar from "../components/topNavbar";
import { FaEye } from "react-icons/fa";

export default function page() {
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-3xl p-8 md:w-[40rem] mt-20 opacity-80 ">
          <div className="bg-[#AD773D]"></div>
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-0.5 text-3xl ">LOGIN</h1>
          <hr style={{ borderWidth: '1.5px' }} />
          <p className="text-[#171832] font-serif text-center mt-1 mb-8" style={{ fontSize: '14px' }}>WELCOME BACK!</p>
          <div className="flex flex-col space-y-4 justify-end" style={{ marginLeft: '18%' }}>
            <button className="bg-[#AD773D] text-white  py-2 px-4 rounded-full w-full md:w-[23rem] flex justify-between items-center">
              Enter your email
            </button>
            <button className="bg-[#AD773D] text-white  py-2 px-4 rounded-full w-full md:w-[23rem] flex justify-between items-center">
              <div>Enter your password</div>
              <FaEye />
            </button>
          </div>
          <div className="mt-6" style={{ marginLeft: '13%' }}>
            <button className="bg-[#171832] text-white  py-2 px-4 rounded-full w-full md:w-[27rem] ">
              Enter your email
            </button>
            <div className="flex" style={{ marginLeft: '40%' }}>
              <p className="text-[#171832] font-serif text-center mt-1 mb-8" style={{ fontSize: '14px', marginLeft: '-25%' }}>Not have an account ?</p>
              <p className="text-[#AD773D] font-serif text-center mt-1 mb-8" style={{ fontSize: '14px' }}>Register</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}