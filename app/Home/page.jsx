"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import Bg from "../assets/images/bg.png";
import TopNavbar from "../components/topNavbarHome";

export default function Page() {
    return (
        <>
            <TopNavbar />
            <Image
                src={Logo}
                alt="Logo"
                width={150}
                height={200}
                className="absolute z-10 left-20 top-0"
            />
            <div className="container mx-auto mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:order-2">
                        <h2 className="font-normal text-2xl mb-4">
                            Hotel pertama dan satu-satunya{" "}
                            <span className="font-semibold">yang fiksional</span>
                        </h2>
                        <p className="text-lg">
                            Diciptakan oleh{" "}
                            <span className="font-semibold">[[Reyhan]]</span>, mahasiswa
                            Universitas Atma Jaya Yogyakarta dari program Studi
                            Informatika.
                        </p>
                        <p className="text-lg">
                            Nomor Pokok Mahasiswa:{" "}
                            <span className="font-semibold">[[210711212]]</span>
                        </p>
                    </div>
                </div>
                <hr className="mt-5 mb-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="font-normal text-2xl mb-4">
                            Your comfort is key,{" "}
                            <span className="font-semibold">
                                experience the heartbeat of our hotel
                            </span>
                            .
                        </h2>
                        <p className="text-lg">
                            Our modern, sophisticated guest rooms are designed to exceed
                            expectations with premium comfort, technology where you need
                            it, and thoughtful attention to detail.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
