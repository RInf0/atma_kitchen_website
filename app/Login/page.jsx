"use client";
import React, { useState, useEffect } from "react";
import TopNavbar from "../components/topNavbarWelcome";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "../api/auth/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (formData) => {
    setIsLoad(true);
    await login(formData).then((res) => {
      console.log(res.token);
      console.log(res.abilities);
      toast.success("Login Berhasil", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("token", res.token);
      localStorage.setItem("abilities", res.abilities);
    });
  };
  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (localStorage.getItem("abilities") === "ADMIN") {
        router.push("/dashboard");
      } else if (localStorage.getItem("abilities") === "MO") {
        router.push("/MO");
      } else if (localStorage.getItem("abilities") === "OWNER") {
        router.push("/owner");
      }
    }
  });

  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen w-full">
        <ToastContainer />
        <div className="bg-white rounded-3xl p-8 md:w-[40rem] mt-20 bg-opacity-80 w-full">
          <h1 className="text-[#AD773D] font-bold font-serif text-center mb-0.5 text-3xl ">
            LOGIN
          </h1>
          <hr style={{ borderWidth: "1.5px" }} />
          <p
            className="text-[#171832] font-serif text-center mt-1 mb-8"
            style={{ fontSize: "14px" }}
          >
            WELCOME BACK!
          </p>
          <form action={handleLogin}>
            <div className="flex justify-center mt-5">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] flex justify-between items-center"
              />
            </div>
            <div className="flex justify-center mt-5 items-center relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="bg-[#AD773D] placeholder-slate-950 text-black py-2 px-4 rounded-full w-full md:w-[23rem] pr-12" // Tambahkan pr-12 untuk memberikan ruang di sebelah kanan input untuk ikon mata
              />
              <div className="absolute right-32 top-1/2 transform -translate-y-1/2">
                {showPassword ? (
                  <FaEyeSlash onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <button className="bg-[#011145] hover:bg-[#01071b] text-[#AD773D] py-2 px-4 rounded-full w-96 h-14 ">
                {isLoad ? "Loading..." : "Login"}
              </button>
            </div>
            <div className="flex justify-center mt-5">
              <p
                className="text-[#171832] font-serif text-center mt-1 mb-8"
                style={{ fontSize: "14px" }}
              >
                Not have an account ?{" "}
                <a
                  href="/Register"
                  className="text-[#AD773D] font-serif text-center mt-1 mb-8 hover:teks-[#AD773D]"
                  style={{ fontSize: "14px" }}
                >
                  Register
                </a>
              </p>
            </div>
            <div className="flex justify-end">
              <a
                href="newPassCustomer"
                className="text-[#AD773D] font-serif text-right mt-1 mb-8 hover:teks-[#AD773D]"
                style={{ fontSize: "14px" }}
              >
                Lupa Password
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
