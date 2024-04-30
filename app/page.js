import React from 'react';
import TopNavbar from "./components/topNavbarWelcome";
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