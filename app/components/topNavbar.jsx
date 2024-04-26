import React from 'react'
import Image from 'next/image'
import Logo from '../assets/images/logo.png'
import Pita from '../assets/images/pita.png'
import Bg from '../assets/images/bg.png'

export default function TopNavbar() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className='text-[#AD773D] font-bold text-5xl absolute z-10 right-28 top-16'>Atma Kitchen</div>
      <div className='flex justify-between w-full items-center bg-[#171832] h-24 absolute top-10 z-10'></div>
      <Image
        src={Logo}
        alt="Logo"
        width={150}
        height={200}
        className='absolute z-10 left-20 top-0'
      />
      <Image
        src={Pita}
        alt="Pita"
        width={50}
        height={100}
        className='absolute z-10 right-8 top-16'
      />
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: '-1' }}>
        <Image
          src={Bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          quality={100}
          style={{ filter: 'brightness(100%)' }}
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full size-48 md:size-96">
        
        <h1 className="text-[#171832] font-bold text-center mb-4">Welcome to Atma Kitchen</h1>
        <p className="text-[#171832] text-center mb-8">Silahkan lakukan register bila belum punya akun</p>
        <button className="bg-[#171832] text-white font-bold py-2 px-4 rounded-full w-full mb-4">
          Login
        </button>
        <button className="bg-[#171832] text-white font-bold py-2 px-4 rounded-full w-full">
          Register
        </button>
      </div>
    </div>  
  );
}