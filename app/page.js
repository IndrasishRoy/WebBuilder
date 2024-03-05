"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Deals from "./components/Deals";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col px-64">
        <div>
          <Home />
        </div>
        <div>
          <Deals />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
