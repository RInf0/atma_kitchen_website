import React from 'react';
import Login from "./page/login";
import TopNavbar from "./components/topNavbar";
import Card from "./components/card";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center items-center h-screen">
        <Card />
      </div>
    </>
  );
}