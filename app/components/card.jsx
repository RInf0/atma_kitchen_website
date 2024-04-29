import React from "react";

export default function Card() {
  return (
    <div className="bg-white rounded-3xl p-8 md:w-[40rem] mt-10">
      <h1 className="text-[#171832] font-bold text-2xl font-serif text-center mb-2">
        Welcome to Atma Kitchen
      </h1>
      <p className="text-[#171832] font-serif text-center mb-10">
        Silahkan lakukan register bila belum punya akun
      </p>
      <div>
        <button className="bg-[#171832] text-white font-bold py-2 px-4 rounded-full w-full mb-4 opacity-100">
          Login
        </button>
        <button className="bg-[#171832] text-white font-bold py-2 px-4 rounded-full w-full mb-8 opacity-100">
          Register
        </button>
      </div>
    </div>
  );
}
