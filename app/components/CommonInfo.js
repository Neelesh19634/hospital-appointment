"use client"
import { Ambulance, ArrowRight, MapPin, Phone } from "lucide-react";
import Head from "next/head";
import React from "react";

const CommonInfo = () => {
  return (
    <div className="relative bg-blue-50 flex items-center justify-center">
    <Head>
      <title>Contact</title>
      <meta name="description" content="Contact page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-white shadow-lg rounded-lg p-12 flex items-center space-x-10 absolute bottom-[-70px]">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-500 text-white rounded-full p-4">
          <Phone className="text-2xl" />
        </div>
        <div>
          <div className="text-gray-800 font-semibold">Hotline</div>
          <div className="text-gray-500">123-456-7890</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-blue-500 text-white rounded-full p-4">
          <Ambulance className="text-2xl" />
        </div>
        <div>
          <div className="text-gray-800 font-semibold">Ambulance</div>
          <div className="text-gray-500">876-256-876</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-blue-500 text-white rounded-full p-4">
          <MapPin className="text-2xl" />
        </div>
        <div>
          <div className="text-gray-800 font-semibold">Location</div>
          <div className="text-gray-500">New York, US</div>
        </div>
      </div>
      <div>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:scale-[1.2] flex items-center">
          Book Now <ArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  </div>
  );
};

export default CommonInfo;
