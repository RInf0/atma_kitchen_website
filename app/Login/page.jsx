import React from 'react';
import TopNavbar from "../components/topNavbar";

export default function page() {
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-3xl p-8 md:w-[60rem] h-[30rem]">
          <div className="bg-[#AD773D]"></div>
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-4 text-2xl">LOGIN</h1>
          <hr />
          <p className="text-[#171832] font-serif text-center mb-8">WELCOME BACK!</p>
          <button className="bg-[#171832] text-white font-bold py-2 px-4 rounded-full w-full mb-4">
            Login
          </button>
          <button className="bg-[#171832] text-white font-bold py-2 px-4 rounded-full w-full">
            Register
          </button>
        </div>
      </div>
    </>
  );
}