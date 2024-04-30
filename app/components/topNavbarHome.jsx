"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import Bg from "../assets/images/bg.png";
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    
    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={Bg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    quality={100}
                    style={{ filter: "brightness(100%)" }}
                />
            </div>

            {/* Top Bar */}
            <div className="bg-[#171832] opacity-80 h-20 absolute top-8 w-full z-10" />

            {/* Logo */}
            <div className="absolute z-10 left-10 top-0">
                <Image src={Logo} alt="Logo" width={150} height={200} />
            </div>

            {/* Login Button */}
            <button
                type="button"
                className="absolute z-10 left-64 top-14 text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold"
                onClick={() => router.push('/dashboard')}
            >
                LOGIN
            </button>

            {/* Action Buttons */}
            <div className="absolute flex gap-20 z-10 top-14 right-20">
                <button
                    type="button"
                    className="text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold"
                    onClick={() => router.push('/Home')}
                >
                    Home
                </button>
                <button
                    type="button"
                    className="text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold"
                    onClick={() => router.push('/OurMenu')}
                >
                    Our Menu
                </button>
                <button
                    type="button"
                    className="text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold"
                    onClick={() => router.push('/Contact')}
                >
                    Contact
                </button>
            </div>
        </div>
    );
}
