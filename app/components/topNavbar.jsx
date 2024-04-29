import React from 'react';
import Image from 'next/image';
import Logo from '../assets/images/logo.png';
import Pita from '../assets/images/pita.png';
import Bg from '../assets/images/bg.png';

export default function TopNavbar() {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100vh', zIndex: '-1' }}>
      <Image
        src={Bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        quality={100}
        style={{ filter: 'brightness(100%)', opacity: '0.8' }} // Set opacity pada latar belakang
      />
      <div className='text-[#AD773D] font-bold text-5xl absolute z-10 right-28 top-16'>Atma Kitchen</div>
      <div className='flex justify-between w-full items-center bg-[#171832] h-24 absolute top-10 z-10'></div>
      <Image
        src={Logo}
        alt="Logo"
        width={150}
        height={200}
        className='absolute z-10 left-20 top-0'
        style={{ opacity: '0.8' }} // Set opacity pada logo
      />
      <div className='text-[#AD773D] font-bold font-serif text-3xl absolute z-10 right-28 top-14'>Atma Kitchen</div>
      <Image
        src={Pita}
        alt="Pita"
        width={50}
        height={100}
        className='absolute z-10 right-8 top-16'
      />
    </div>
  );
}
