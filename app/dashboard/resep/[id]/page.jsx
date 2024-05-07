"use client";
import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { ResepUpdate, getResepById } from "../../../api/apiResep";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const editResep = () => {
  const router = useRouter();
  const param = useParams();
  const [formData, setFormData] = useState({
    takaran: "",
  });

  useEffect(() => {
    getResepById(param.id).then((res) => {
      setFormData({
        takaran: res.takaran,
      });
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDatatoSend = new FormData();
    formDatatoSend.append("takaran", formData.takaran);

    ResepUpdate(param.id, formDatatoSend).then((res) => {
      if (res.success) {
        toast.success("Resep berhasil diupdate", {
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
          router.push("/dashboard/resep");
        }, 2000);
        handleClearForm();
      } else {
        toast.error("Resep gagal diupdate", {
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
  };

  // handleclear form
  const handleClearForm = () => {
    setFormData({
      takaran: "",
    });
  };

  return (
    <div className="w-full relative">
      <h1 className="text-2xl font-bold">Edit Resep</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="px-20 py-10"
      >
        <div className="mb-5">
          <label
            htmlFor="takaran"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Takaran
          </label>
          <input
            type="text"
            id="takaran"
            name="takaran"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Takaran"
            required
            value={formData.takaran}
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

export default editResep;
