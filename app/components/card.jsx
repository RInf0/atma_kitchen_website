// components/Card.js
import React from 'react';

export default function Card() {
  return (
    <div className="bg-white rounded-3xl p-8 md:w-[40rem]">
      <h1 className="text-[#171832] font-bold font-serif text-center mb-4">Welcome to Atma Kitchen</h1>
      <p className="text-[#171832] font-serif text-center mb-8">Silahkan lakukan register bila belum punya akun</p>
      <button className="bg-[#171832] text-white font-bold py-2 px-4 rounded-full w-full mb-4">
        Login
      </button>
      <button className="bg-[#171832] text-white font-bold py-2 px-4 rounded-full w-full">
        Register
      </button>
    </div>
  );
}
