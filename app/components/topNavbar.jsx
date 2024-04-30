import React from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import Pita from "../assets/images/pita.png";
import Bg from "../assets/images/bg.png";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function TopNavbar() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        zIndex: "-1",
      }}
    >
      <Image
        src={Bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
        style={{ filter: "brightness(100%)" }}
      />
      {/* <div className='text-[#AD773D] font-bold text-5xl absolute z-10 right-28 top-16'>Atma Kitchen</div> */}
      <div className="flex justify-between w-full items-center bg-[#171832] h-20 absolute mb-3 top-8 z-10 opacity-80"></div>
      <IoMdArrowRoundBack
        size={40}
        className="absolute z-10 left-6 top-14 cursor-pointer text-[#AD773D] "
      />
      <Image
        src={Logo}
        alt="Logo"
        width={150}
        height={200}
        className="absolute z-10 left-20 top-0"
      />
      <div className="text-[#AD773D] font-bold font-serif text-3xl absolute z-10 right-28 top-14">
        Atma Kitchen
      </div>
      <Image
        src={Pita}
        alt="Pita"
        width={50}
        height={100}
        className="absolute z-10 right-8 top-14"
      />
    </div>
  );
}
