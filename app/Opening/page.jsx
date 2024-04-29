import React from 'react';
import TopNavbar from "../components/topNavbar";

export default function page() {
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-3xl p-8 md:w-[40rem]">
          <h1 className="text-[#011145] font-bold font-serif text-center mb-4">Welcome to Atma Kitchen</h1>
          <p className="text-[#011145] font-serif text-center mb-8">Silahkan lakukan register bila belum punya akun</p>
          <button className="bg-[#011145] text-white font-bold py-2 px-4 rounded-full w-full mb-4">
            Login
          </button>
          <button className="bg-[#011145] text-white font-bold py-2 px-4 rounded-full w-full">
            Register
          </button>
        </div>
      </div>
    </>
  );
}