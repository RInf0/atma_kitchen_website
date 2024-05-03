"use client";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GetProduk } from "../../api/apiProduk";

const Produk = () => {
  const [produk, setProduk] = useState([]);

  const imageLoader = ({ src, width, quality }) => {
    return `http://127.0.0.1:8000/storage/produk/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  const fetchData = () => {
    GetProduk()
      .then((res) => {
        setProduk(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl mt-0 x  font-bold">Produk</h1>
      <Link href="/dashboard/produk/create">
        <button className="bg-green-500 p-2 rounded-lg mt-2 mb-4 flex items-center">
          Tambah Produk <FaPlus className="ml-2" />
        </button>
      </Link>
      <div className="grid grid-cols-3 gap-7">
        {produk.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[15rem]"
          >
            <div className="w-full h-52 overflow-hidden">
              <Image
                className="rounded-t-lg"
                loader={imageLoader}
                src={item.image}
                alt="test"
                width={500}
                height={500}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.nama_produk}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                harga : {item.harga_produk}
              </p>
              <a
                href="#"
                className="inline-flex items-center p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
                style={{ marginLeft: "60%" }}
              >
                <FaTrash className="text-white" />
              </a>

              <a
                href="#"
                className="inline-flex items-center p-2 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaPencilAlt className="text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produk;
