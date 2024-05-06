"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/Login");
    }
  });
  return (
    <>
      <h1>Welcome Admin</h1>
    </>
  );
};

export default Dashboard;
