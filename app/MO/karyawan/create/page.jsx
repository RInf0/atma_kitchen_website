"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { KaryawanCreate } from "../../../api/apiKaryawan";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateKaryawan = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama_karyawan: "",
    email_karyawan: "",
    notelp_karyawan: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDatatoSend = new FormData();
    formDatatoSend.append("nama_karyawan", formData.nama_karyawan);
    formDatatoSend.append("email_karyawan", formData.email_karyawan);
    formDatatoSend.append("notelp_karyawan", formData.notelp_karyawan);

    KaryawanCreate(formDatatoSend).then((res) => {
      if (res.success) {
        toast.success("Karyawan berhasil ditambahkan", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          router.push("/MO/karyawan");
        }, 2000);
        handleClearForm();
      } else {
        toast.error("Karyawan gagal ditambahkan", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
    console.log(formData);
  };

  // handleclear form
  const handleClearForm = () => {
    setFormData({
      nama_karyawan: "",
      email_karyawan: "",
      notelp_karyawan: "",
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
            htmlFor="nama_karyawan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Karyawan
          </label>
          <input
            type="text"
            id="nama_karyawan"
            name="nama_karyawan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Karyawan"
            required
            value={formData.nama_karyawan}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email_karyawan"
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
            htmlFor="notelp_karyawan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nomor Telepon Karyawan
          </label>
          <input
            type="number"
            id="notelp_karyawan"
            name="notelp_karyawan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nomor Telepon Karyawan"
            required
            value={formData.notelp_karyawan}
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

      <ToastContainer />
    </div>
  );
};

export default CreateKaryawan;
