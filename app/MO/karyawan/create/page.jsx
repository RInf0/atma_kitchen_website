"use client";
import React, { useState } from "react";
import { KaryawanCreate } from "../../../api/apiKaryawan";

const CreateProduk = () => {
  const [istoast, setIstoast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nama_karyawam: "",
    email_karyawan: "",
    no_telp: "",
    jumlah_bolos: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDatatoSend = new FormData();
    formDatatoSend.append("nama_karyawam", formData.nama_karyawam);
    formDatatoSend.append("email_karyawan", formData.email_karyawan);
    formDatatoSend.append("no_telp", formData.no_telp);
    formDatatoSend.append("jumlah_bolos", formData.jumlah_bolos);

    ProdukCreate(formDatatoSend).then((res) => {
      if (res.success) {
        setIstoast(true);
        setTimeout(() => {
          setIstoast(false);
        }, 3000);
        handleClearForm();
      } else {
        console.log(res);
      }
    });
    console.log(formData);
  };

  // handleclear form
  const handleClearForm = () => {
    setFormData({
      nama_karyawam: "",
      email_karyawan: "",
      no_telp: "",
      jumlah_bolos: "",
    });
  };

  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Tambah Karyawan</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div className="mb-5">
          <label
            htmlFor="nama_karyawam"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Karyawan
          </label>
          <input
            type="text"
            id="nama_karyawam"
            name="nama_karyawam"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Karyawan"
            required
            value={formData.nama_karyawam}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="harga_produk"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Karyawan
          </label>
          <input
            type="email"
            id="email_karyawan"
            name="email_karyawan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email Karyawan"
            required
            value={formData.email_karyawan}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="no_telp"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nomor Telepon
          </label>
          <input
            type="number"
            id="no_telp"
            name="no_telp"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nomor Telepon"
            required
            value={formData.no_telp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="jumlah_bolos"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Jumlah Bolos
          </label>
          <input
            type="number"
            id="jumlah_bolos"
            name="jumlah_bolos"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jumlah Bolos"
            required
            value={formData.jumlah_bolos}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-2.5 mt-5 w-full hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <div
        id="toast-success"
        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute top-0 right-0"
        role="alert"
        style={{ display: istoast ? "block" : "none" }}
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">Item moved successfully.</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>

      {/* comment */}
      {/* <div
        id="toast-warning"
        className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
          </svg>
          <span className="sr-only">Warning icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">Improve password difficulty.</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-warning"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default CreateProduk;
