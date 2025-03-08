"use client";
import { Ambulance, ArrowRight, MapPin, Phone } from "lucide-react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";

const CommonInfo = () => {
  const router = useRouter();
  return (
    <div className="relative bg-blue-50 flex items-center justify-center px-4 py-8 md:py-12">
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 flex flex-wrap justify-center items-center gap-4 lg:gap-10 absolute bottom-[-70px] max-w-4xl w-full mx-auto">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white rounded-full p-3 md:p-4">
            <Phone className="text-xl md:text-2xl" />
          </div>
          <div>
            <div className="text-gray-800 font-semibold text-sm md:text-base">Hotline</div>
            <div className="text-gray-500 text-xs md:text-sm">123-456-7890</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white rounded-full p-3 md:p-4">
            <Ambulance className="text-xl md:text-2xl" />
          </div>
          <div>
            <div className="text-gray-800 font-semibold text-sm md:text-base">Ambulance</div>
            <div className="text-gray-500 text-xs md:text-sm">876-256-876</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white rounded-full p-3 md:p-4">
            <MapPin className="text-xl md:text-2xl" />
          </div>
          <div>
            <div className="text-gray-800 font-semibold text-sm md:text-base">Location</div>
            <div className="text-gray-500 text-xs md:text-sm">New York, US</div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 md:px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 flex items-center text-sm md:text-base"
            onClick={() => {
              router.push("/Appointment");
            }}
          >
            Book Now <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonInfo;
