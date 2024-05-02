"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import TopNavbar from "../components/topNavbarHome";

export default function Page() {
    return (
        <>
            <TopNavbar />
            <Image
                src={Logo}
                alt="Logo"
                className="absolute z-10 left-1/3 top-1/4"
            />
            <div className="container w-full mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:order-2">
                        <p className="text-lg">
                            Atma Kitchen adalah sebuah usaha baru di bidang kuliner,
                            yang dimiliki oleh Bu Margareth Atma Negara, seorang selebgram
                            yang sangat suka mencoba makanan yang sedang hits. Karena
                            hobinya tersebut, Bu Margareth terinspirasi untuk membuat usaha
                            di bidang kuliner, dimana ia akan menjual aneka kue premium,
                            dan akan segara dibuka di Yogyakarta
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg">
                            Atma Kitchen Menyajikan
                            #Cake & sajian lezat untuk semua
                            kalangan.
                            Sejuta rasa untuk #BerbagiSemangat
                            Bukan #TokoCake biasa
                            Mampir & jadi #SahabatSejatiku
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
